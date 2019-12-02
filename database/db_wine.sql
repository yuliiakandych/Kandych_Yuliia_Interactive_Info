-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 08, 2019 at 01:48 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_wine`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_morewine`
--

CREATE TABLE `tbl_morewine` (
  `ID` int(11) NOT NULL,
  `country` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `cover` varchar(200) NOT NULL,
  `img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_morewine`
--

INSERT INTO `tbl_morewine` (`ID`, `country`, `description`, `cover`, `img`) VALUES
(1, 'France', 'The French consume more wine than people in any other country — 370 glasses of wine per person per year!', 'france.svg', 'france_flag.svg'),
(2, 'Portugal', 'The Portuguese consume 339 glasses of wine per person per year. ', 'portugal.svg', 'portugal_flag.svg'),
(3, 'Andorra', 'The Andorran consume 312  glasses of wine per person per year. ', 'andorra.svg', 'andorra_flag.svg'),
(4, 'Switzerland', 'The Swiss consume 280  glasses of wine per person per year. ', 'switzerland.svg', 'switzerland_flag.svg'),
(5, 'Denmark', 'The Danish consume 276  glasses of wine per person per year. ', 'denmark.svg', 'denmark_flag.svg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_morewine`
--
ALTER TABLE `tbl_morewine`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_morewine`
--
ALTER TABLE `tbl_morewine`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
