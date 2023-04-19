-- ---
-- Create tables
-- ---

CREATE TABLE IF NOT EXISTS weather (
  zipcode INTEGER DEFAULT NOT NULL,
  city VARCHAR(30) NULL DEFAULT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  temp_F INTEGER NULL
  cloud_cover
  moon_phase
  wind_direction
  wind_speed
  humidity
  sunset
  sunrise
  PRIMARY KEY (product_id)
);



-- ---
-- Foreign Keys
-- ---

ALTER TABLE features ADD FOREIGN KEY (product_id) REFERENCES product_info (product_id);



-- ---
-- Run this code in terminal to create tables using the above code:
-- psql -h hostname -d databasename -U username -f file.sql
-- ---

psql -h localhost -d product_overview -U bread -f ~/Documents/HackReactor/SEI/Git/SDC/OverviewAPI-JT/overview.sql



-- ---
-- Run this code in psql to import CSV data into tables:
-- \COPY <table_name> FROM '<path_to_csv>' WITH (FORMAT csv, HEADER true);
-- ---

\COPY product_info (product_id, name, slogan, description, category, default_price)
FROM '/Users/Jessica/Documents/HackReactor/SEI/SDC/Data CSVs/product.csv'
WITH (FORMAT csv, HEADER true);


-- ---
-- Indexes
-- ---

-- CREATE INDEX features_product_id_idx ON products.features USING hash (product_id);

-- From Aidan:
CREATE INDEX photos_styleid_idx ON photos(style_id);