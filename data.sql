CREATE DATABASE  IF NOT EXISTS `bonhabite` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `bonhabite`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: bonhabite
-- ------------------------------------------------------
-- Server version	5.7.26

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
-- Dumping data for table `Shipments`
--

LOCK TABLES `Shipments` WRITE;
/*!40000 ALTER TABLE `Shipments` DISABLE KEYS */;
INSERT INTO `Shipments` VALUES (1,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `Shipments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `adressUser`
--

LOCK TABLES `adressUser` WRITE;
/*!40000 ALTER TABLE `adressUser` DISABLE KEYS */;
INSERT INTO `adressUser` VALUES (1,2,1,NULL,NULL,NULL),(2,3,2,NULL,NULL,NULL);
/*!40000 ALTER TABLE `adressUser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `adresses`
--

LOCK TABLES `adresses` WRITE;
/*!40000 ALTER TABLE `adresses` DISABLE KEYS */;
INSERT INTO `adresses` VALUES (1,'Las Heras',123,4,'B',1050,'BsAs',NULL,NULL,NULL),(2,'Coronel Diaz',456,NULL,NULL,1600,'Tigre',NULL,NULL,NULL);
/*!40000 ALTER TABLE `adresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cartProduct`
--

LOCK TABLES `cartProduct` WRITE;
/*!40000 ALTER TABLE `cartProduct` DISABLE KEYS */;
INSERT INTO `cartProduct` VALUES (1,1,1,1,20000,1,'',NULL,NULL,NULL);
/*!40000 ALTER TABLE `cartProduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,2,20000,NULL,NULL,NULL),(2,3,6000,NULL,NULL,NULL);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Mesas',NULL,NULL,NULL),(2,'Sillas',NULL,NULL,NULL),(3,'Bancos',NULL,NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categoryProduct`
--

LOCK TABLES `categoryProduct` WRITE;
/*!40000 ALTER TABLE `categoryProduct` DISABLE KEYS */;
INSERT INTO `categoryProduct` VALUES (1,1,1,NULL,NULL,NULL),(2,2,3,NULL,NULL,NULL);
/*!40000 ALTER TABLE `categoryProduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `collections`
--

LOCK TABLES `collections` WRITE;
/*!40000 ALTER TABLE `collections` DISABLE KEYS */;
INSERT INTO `collections` VALUES (1,'Colección A',NULL,NULL,NULL),(2,'Colección B',NULL,NULL,NULL),(3,'Colección C',NULL,NULL,NULL);
/*!40000 ALTER TABLE `collections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `colorProduct`
--

LOCK TABLES `colorProduct` WRITE;
/*!40000 ALTER TABLE `colorProduct` DISABLE KEYS */;
INSERT INTO `colorProduct` VALUES (1,1,5,NULL,NULL,NULL),(2,2,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `colorProduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Blanco',NULL,NULL,NULL),(2,'Negro',NULL,NULL,NULL),(3,'Gris',NULL,NULL,NULL),(4,'Azul',NULL,NULL,NULL),(5,'Madera',NULL,NULL,NULL),(6,'Amarillo',NULL,NULL,NULL),(7,'Verde',NULL,NULL,NULL),(8,'Plateado',NULL,NULL,NULL);
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `imageProduct`
--

LOCK TABLES `imageProduct` WRITE;
/*!40000 ALTER TABLE `imageProduct` DISABLE KEYS */;
INSERT INTO `imageProduct` VALUES (1,2,3,NULL,NULL,NULL),(2,2,4,NULL,NULL,NULL);
/*!40000 ALTER TABLE `imageProduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'mesa.jpg',NULL,NULL,NULL),(2,'silla.jpg',NULL,NULL,NULL),(3,'banco.jpg',NULL,NULL,NULL),(4,'bancoblanco.jpg',NULL,NULL,NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `materialProduct`
--

LOCK TABLES `materialProduct` WRITE;
/*!40000 ALTER TABLE `materialProduct` DISABLE KEYS */;
INSERT INTO `materialProduct` VALUES (1,1,4,NULL,NULL,NULL),(2,2,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `materialProduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (1,'madera',NULL,NULL,NULL),(2,'metal',NULL,NULL,NULL),(3,'plástico',NULL,NULL,NULL),(4,'roble',NULL,NULL,NULL),(5,'quebracho',NULL,NULL,NULL),(6,'arpillera',NULL,NULL,NULL);
/*!40000 ALTER TABLE `materials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,2,1,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `paymentMethods`
--

LOCK TABLES `paymentMethods` WRITE;
/*!40000 ALTER TABLE `paymentMethods` DISABLE KEYS */;
INSERT INTO `paymentMethods` VALUES (1,'Tarjeta de Crédito',NULL,NULL,NULL),(2,'Tarjeta de Débito',NULL,NULL,NULL),(3,'Mercado Pago',NULL,NULL,NULL),(4,'Efectivo',NULL,NULL,NULL);
/*!40000 ALTER TABLE `paymentMethods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Mesa','Mesa de Madera',12000,'mesa.jpg',2,12,'150 x 145','50',1,1,'0',NULL,NULL,NULL),(2,'Banco','Banco Blanco',6000,NULL,1,6,'100 x 50','5',0,0,'15',NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin',NULL,NULL,NULL),(2,'user',NULL,NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'aprobado',NULL,NULL,NULL),(2,'denegado',NULL,NULL,NULL),(3,'en camino',NULL,NULL,NULL),(4,'entregado',NULL,NULL,NULL),(5,'pendiente',NULL,NULL,NULL);
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Juan','Gomez','jgomez@gmail.com','123456','juan.jpg',1,NULL,NULL,NULL),(2,'Maria ','Lopez','mlopez@gmail.com','123456','maria.jpg',2,NULL,NULL,NULL),(3,'Martin','Fernandez','mfernandez@gmail.com','123456','martin.jpg',2,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-11 15:02:49
