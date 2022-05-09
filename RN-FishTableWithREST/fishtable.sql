-- MySQL dump 10.13  Distrib 5.7.29, for Win64 (x86_64)
--
-- Host: localhost    Database: fishdb
-- ------------------------------------------------------
-- Server version	5.7.29-log

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
-- Table structure for table `fish`
--

DROP TABLE IF EXISTS `fish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fish` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `breed` varchar(100) NOT NULL,
  `weight` decimal(6,2) DEFAULT NULL,
  `length` decimal(8,2) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `waters` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fish`
--

LOCK TABLES `fish` WRITE;
/*!40000 ALTER TABLE `fish` DISABLE KEYS */;
INSERT INTO `fish` VALUES (1,'salmon',5.00,75.00,'Hämeenlinna','Ahvenistonjärvi'),(2,'perch',1.50,55.00,'Hämeenlinna','Ahvenistonjärvi'),(3,'salmon',6.40,72.00,'Hollola','Tiilijrvi'),(4,'salmon',3.00,45.00,'Lahti','Vesijrvi'),(5,'perch',1.20,35.00,'Hmeenlinna','lampi'),(6,'perch',1.20,35.00,'Hmeenlinna','lampi'),(7,'perch',1.20,35.00,'Hmeenlinna','lampi'),(8,'salmon',5.60,65.00,'Hmeenlinna','Vanajavesi'),(9,'salmon',4.00,58.00,'HML','lampi'),(10,'perch',1.20,25.00,'Hmeenlinna','Ahvenistonjrvi'),(11,'salmon',4.50,64.00,'Hollola','Tiilijrvi'),(12,'salmon',4.50,64.00,'Hollola','Tiilijrvi'),(13,'perch',1.30,23.00,'Hattula','lammikko'),(14,'perch',1.40,25.00,'Hattula','lammikko'),(15,'perch',1.20,19.00,'Hollola','Tiilijärvi'),(16,'perch',1.10,22.00,'Hämeenlinna','Ahvenistonjärvi'),(17,'salmon',3.90,45.00,'Hämeenlinna','Ahvenistonjärvi'),(18,'fish',1.00,15.00,'Hämeenlinna','lampi'),(19,'fish',2.00,22.00,'Hämeenlinna','Ahvenistonjärvi'),(20,'fish',1.00,1.00,'Hämeenlinna','lammikko'),(21,'fish',1.00,1.00,'Hämeenlinna','lammikko'),(22,'fish',2.00,2.00,'Hämeenlinna','lammikko'),(23,'Salmon',5.00,NULL,NULL,NULL),(24,'Perch',2.00,NULL,NULL,NULL),(25,'Salmon',3.50,NULL,NULL,NULL),(26,'fish',2.50,NULL,NULL,NULL),(27,'pike',2.10,NULL,NULL,NULL),(28,'salmon',2.90,NULL,NULL,NULL),(29,'Salmon',4.50,NULL,NULL,NULL),(30,'Fish',1.00,NULL,NULL,NULL),(31,'Pike',2.00,NULL,NULL,NULL),(32,'fishy',0.90,NULL,NULL,NULL),(33,'fishy',0.50,NULL,NULL,NULL);
/*!40000 ALTER TABLE `fish` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-01 17:40:01
