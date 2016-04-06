
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Brands`
--

DROP TABLE IF EXISTS `Brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Brands` (
`Id` int NOT NULL AUTO_INCREMENT,
`Name` varchar(255) DEFAULT NULL,
`Description` varchar(255) DEFAULT NULL,
PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Brands`
--

LOCK TABLES `Brands` WRITE;
/*!40000 ALTER TABLE `Brands` DISABLE KEYS */;
INSERT INTO `Brands` VALUES (1,'Nike','Nike Co.');
/*!40000 ALTER TABLE `Brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Products` (
`Id` int NOT NULL AUTO_INCREMENT,
`Name` varchar(255) DEFAULT NULL,
`Description` varchar(255) DEFAULT NULL,
`Price` float DEFAULT NULL,
`Colour` varchar(255) DEFAULT NULL,
`CreatedDate` datetime DEFAULT NULL,
`AvailabilityStatus` varchar(255) DEFAULT NULL,
`BrandId` int DEFAULT NULL,
PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'Nike shoes 90','NIKE AIR MAX 90 ULTRA ESSENTIAL',120,'Blue','2016-03-23 16:10:50','available',1),(2,'Nike Jordan','Jordan Flight Flex Trainer Black/White ',150,'Black','2016-03-23 16:13:31','available',1),(3,'Nike Jordan - White','Jordan Flight Flex Trainer Black/White ',150,'White','2016-03-23 16:13:43','available',1),(4,'Nike Jordan - Grey','Nike Dualfusion 2016 \"Grey / Red\"',200,'Grey','2016-03-23 16:14:27','available',1),(5,'Nike Jordan - Red','Nike Dualfusion 2016 \"Grey / Red\"',200,'Red','2016-03-23 16:14:37','available',1),(6,'Nike Air','Nike Air Zoom Pegasus 31',110,'Green','2016-03-23 16:15:17','available',1);
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reviews`
--

DROP TABLE IF EXISTS `Reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Reviews` (
`Id` int NOT NULL AUTO_INCREMENT,
`Rating` int DEFAULT NULL,
`Comment` varchar(255) DEFAULT NULL,
`ProductId` int DEFAULT NULL,
`UserId` int DEFAULT NULL,
PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reviews`
--

LOCK TABLES `Reviews` WRITE;
/*!40000 ALTER TABLE `Reviews` DISABLE KEYS */;
INSERT INTO `Reviews` VALUES (1,2,'Very nice shoes',2,1);
/*!40000 ALTER TABLE `Reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
`Id` int NOT NULL AUTO_INCREMENT,
`UserType` varchar(255) DEFAULT NULL,
`UserName` varchar(255) DEFAULT NULL,
`Email` varchar(255) DEFAULT NULL,
`DateOfBirth` datetime DEFAULT NULL,
PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Customer','testinguser1','user1@hotmail.com','0000-00-00 00:00:00'),(2,'Customer','testinguser2','user2@gmail.com','1990-12-02 17:00:00'),(3,'Customer','testinguser3',NULL,NULL),(4,'Customer','testinguser3','fdaf',NULL),(5,'Customer','testinguser4','user4@gmail.com','1984-02-02 17:00:00'),(6,'Customer','testinguser5','user5@gmail.com','1987-12-11 17:00:00');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
