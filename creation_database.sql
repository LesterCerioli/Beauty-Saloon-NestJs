USE sonnardb;
GO

-- Create Address Table
CREATE TABLE address (
    id INT IDENTITY(1,1) PRIMARY KEY,
    street VARCHAR(255) NOT NULL,
    district VARCHAR(255) NOT NULL
);

-- Create City Table
CREATE TABLE city (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create State Table
CREATE TABLE state (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Saloon Table
CREATE TABLE saloons (
    id INT IDENTITY(1,1) PRIMARY KEY,
    cnpj VARCHAR(255) NOT NULL,
    saloonName VARCHAR(255) NOT NULL
);

-- Create Customer Table
CREATE TABLE customer (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- Create Attendant Table
CREATE TABLE attendant (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Appointment Table
CREATE TABLE appointment (
    id INT IDENTITY(1,1) PRIMARY KEY,
    clientName VARCHAR(255) NOT NULL,
    appointmentDate DATE NOT NULL,
    appointmentTime TIME NOT NULL,
    attendantName VARCHAR(255) NOT NULL,
    customerId INT NOT NULL,
    FOREIGN KEY (customerId) REFERENCES customer(id)
);
