import csv
import re

def clean_string(s):
    """Clean string for SQL insert"""
    if not s:
        return 'NULL'
    # Escape single quotes
    s = s.replace("'", "''")
    return f"'{s}'"

def convert_csv_to_sql():
    sql_statements = []

    with open('Listing_export.csv', 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)

        for row in reader:
            # Map CSV columns to Supabase table columns
            title = clean_string(row['title'])
            category = clean_string(row['category'])
            location = clean_string(row['location'])
            rating = row['rating'] if row['rating'] else 'NULL'
            price_range = clean_string(row['price_label'])
            image_url = clean_string(row['image_url'])
            affiliate_link = clean_string(row['link'])

            # Convert single image to array format
            if image_url != 'NULL':
                images_array = f"ARRAY[{image_url}]"
            else:
                images_array = 'NULL'

            # Create the SQL INSERT statement
            sql = f"""INSERT INTO public.listings (title, category, location, rating, price_range, images, affiliate_link, featured, created_at)
VALUES ({title}, {category}, {location}, {rating}, {price_range}, {images_array}, {affiliate_link}, false, NOW());"""

            sql_statements.append(sql)

    return sql_statements

# Generate SQL
sql_statements = convert_csv_to_sql()

# Write to file
with open('import_listings.sql', 'w', encoding='utf-8') as f:
    f.write("-- Import listings from CSV\n")
    f.write("-- Run this in Supabase SQL Editor\n\n")
    for sql in sql_statements:
        f.write(sql + "\n")

print(f"Generated {len(sql_statements)} SQL INSERT statements in import_listings.sql")