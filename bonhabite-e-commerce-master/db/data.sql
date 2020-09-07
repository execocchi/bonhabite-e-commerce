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
-- Table structure for table `addressUser`
--

DROP TABLE IF EXISTS `addressUser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addressUser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `addressId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `adress_idx` (`addressId`),
  KEY `user_idx` (`userId`),
  CONSTRAINT `adress` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `user` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addressUser`
--

LOCK TABLES `addressUser` WRITE;
/*!40000 ALTER TABLE `addressUser` DISABLE KEYS */;
INSERT INTO `addressUser` VALUES (1,2,1,NULL,NULL,NULL),(2,3,2,NULL,NULL,NULL);
/*!40000 ALTER TABLE `addressUser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(45) DEFAULT NULL,
  `number` decimal(10,0) DEFAULT NULL,
  `floor` decimal(10,0) DEFAULT NULL,
  `zipCode` decimal(10,0) DEFAULT NULL,
  `apartment` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Las Heras',123,4,1050,'B','BsAs',NULL,NULL,NULL),(2,'Coronel Diaz',456,NULL,1600,NULL,'Tigre',NULL,NULL,NULL);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cartProduct`
--

DROP TABLE IF EXISTS `cartProduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartProduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `cartId` int(11) DEFAULT NULL,
  `statusId` int(11) DEFAULT NULL,
  `subtotal` decimal(10,0) DEFAULT NULL,
  `quantity` decimal(10,0) DEFAULT NULL,
  `salePrice` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productoid_idx` (`productId`),
  KEY `status_idx` (`statusId`),
  KEY `carrito_idx` (`cartId`),
  CONSTRAINT `c` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `p` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `s` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartProduct`
--

LOCK TABLES `cartProduct` WRITE;
/*!40000 ALTER TABLE `cartProduct` DISABLE KEYS */;
INSERT INTO `cartProduct` VALUES (1,1,1,1,20000,1,'',NULL,NULL,NULL);
/*!40000 ALTER TABLE `cartProduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `orderNumber` int(11) DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uer_idx` (`userId`),
  CONSTRAINT `uer` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,2,NULL,20000,NULL,NULL,NULL),(2,3,NULL,6000,NULL,NULL,NULL);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Mesas',NULL,NULL,NULL),(2,'Sillas',NULL,NULL,NULL),(3,'Bancos',NULL,NULL,NULL),(4,'Iluminacion',NULL,NULL,NULL),(5,'Sillones',NULL,NULL,NULL),(6,'Escritorios',NULL,NULL,NULL),(7,'Camas',NULL,NULL,NULL),(8,'Comodas',NULL,NULL,NULL),(9,'Otras',NULL,NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collections`
--

DROP TABLE IF EXISTS `collections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `collections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collections`
--

LOCK TABLES `collections` WRITE;
/*!40000 ALTER TABLE `collections` DISABLE KEYS */;
INSERT INTO `collections` VALUES (1,'Clásica','colecciona.jpg',NULL,NULL,NULL),(2,'Rústica','coleccionb.jpeg',NULL,NULL,NULL),(3,'Minimal','coleccionc.jpg',NULL,NULL,NULL),(4,'Reciclados','reciclados.jpeg',NULL,NULL,NULL);
/*!40000 ALTER TABLE `collections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colorProduct`
--

DROP TABLE IF EXISTS `colorProduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colorProduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `colorId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pro_idx` (`productId`),
  KEY `col_idx` (`colorId`),
  CONSTRAINT `col` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `pro` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colorProduct`
--

LOCK TABLES `colorProduct` WRITE;
/*!40000 ALTER TABLE `colorProduct` DISABLE KEYS */;
INSERT INTO `colorProduct` VALUES (1,1,5,NULL,NULL,NULL),(2,2,1,NULL,NULL,NULL),(3,5,1,NULL,NULL,NULL),(4,3,2,NULL,NULL,NULL),(5,4,2,NULL,NULL,NULL),(6,5,2,NULL,NULL,NULL),(13,7,5,NULL,NULL,NULL),(14,8,1,NULL,NULL,NULL),(15,9,5,NULL,NULL,NULL),(16,9,2,NULL,NULL,NULL),(17,10,3,NULL,NULL,NULL),(18,10,1,NULL,NULL,NULL),(19,11,5,NULL,NULL,NULL),(20,12,2,NULL,NULL,NULL),(21,13,2,NULL,NULL,NULL),(22,14,6,NULL,NULL,NULL),(23,15,10,NULL,NULL,NULL),(24,16,3,NULL,NULL,NULL),(25,17,1,NULL,NULL,NULL),(26,18,1,NULL,NULL,NULL),(27,19,9,NULL,NULL,NULL),(28,20,1,NULL,NULL,NULL),(29,21,2,NULL,NULL,NULL),(30,22,5,NULL,NULL,NULL),(31,23,5,NULL,NULL,NULL),(32,24,5,NULL,NULL,NULL),(33,25,5,NULL,NULL,NULL),(34,26,2,NULL,NULL,NULL),(35,27,5,NULL,NULL,NULL),(36,28,5,NULL,NULL,NULL),(37,29,2,NULL,NULL,NULL),(38,30,2,NULL,NULL,NULL),(39,31,3,NULL,NULL,NULL),(40,31,7,NULL,NULL,NULL),(41,32,3,NULL,NULL,NULL),(42,33,2,NULL,NULL,NULL),(43,34,1,NULL,NULL,NULL),(44,34,5,NULL,NULL,NULL),(45,34,5,NULL,NULL,NULL),(46,35,5,NULL,NULL,NULL),(47,36,5,NULL,NULL,NULL),(48,37,5,NULL,NULL,NULL),(49,38,1,NULL,NULL,NULL),(50,38,5,NULL,NULL,NULL),(51,39,5,NULL,NULL,NULL),(52,40,5,NULL,NULL,NULL),(53,41,6,NULL,NULL,NULL),(54,42,5,NULL,NULL,NULL),(55,43,2,NULL,NULL,NULL),(56,43,5,NULL,NULL,NULL),(57,44,4,NULL,NULL,NULL),(58,45,5,NULL,NULL,NULL),(59,46,2,NULL,NULL,NULL),(60,47,5,NULL,NULL,NULL),(61,48,5,NULL,NULL,NULL);
/*!40000 ALTER TABLE `colorProduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'#FFFFFF',NULL,NULL,NULL),(2,'#000000',NULL,NULL,NULL),(3,'#9BA2AB',NULL,NULL,NULL),(4,'#345BDB',NULL,NULL,NULL),(5,'#A35E43',NULL,NULL,NULL),(6,'#FFE25E',NULL,NULL,NULL),(7,'#6A9C73',NULL,NULL,NULL),(9,'#B5513B',NULL,NULL,NULL),(10,'#74BCF2',NULL,NULL,NULL);
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imageProduct`
--

DROP TABLE IF EXISTS `imageProduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imageProduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `imageId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `image_idx` (`imageId`),
  KEY `product_idx` (`productId`),
  CONSTRAINT `image` FOREIGN KEY (`imageId`) REFERENCES `images` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `product` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imageProduct`
--

LOCK TABLES `imageProduct` WRITE;
/*!40000 ALTER TABLE `imageProduct` DISABLE KEYS */;
INSERT INTO `imageProduct` VALUES (1,2,3,NULL,NULL,NULL),(2,2,4,NULL,NULL,NULL);
/*!40000 ALTER TABLE `imageProduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(60) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'mesa.jpg',NULL,NULL,NULL),(2,'silla.jpg',NULL,NULL,NULL),(3,'banco.jpg',NULL,NULL,NULL),(4,'bancoblanco.jpg',NULL,NULL,NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materialProduct`
--

DROP TABLE IF EXISTS `materialProduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materialProduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `materialId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pr_idx` (`productId`),
  KEY `materials_idx` (`materialId`),
  CONSTRAINT `materials` FOREIGN KEY (`materialId`) REFERENCES `materials` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `pr` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materialProduct`
--

LOCK TABLES `materialProduct` WRITE;
/*!40000 ALTER TABLE `materialProduct` DISABLE KEYS */;
INSERT INTO `materialProduct` VALUES (1,1,4,NULL,NULL,NULL),(2,2,1,NULL,NULL,NULL),(3,4,3,NULL,NULL,NULL),(4,4,2,NULL,NULL,NULL),(5,3,3,NULL,NULL,NULL),(19,7,1,NULL,NULL,NULL),(20,8,1,NULL,NULL,NULL),(21,9,1,NULL,NULL,NULL),(22,9,2,NULL,NULL,NULL),(23,10,6,NULL,NULL,NULL),(24,10,2,NULL,NULL,NULL),(25,11,1,NULL,NULL,NULL),(26,12,2,NULL,NULL,NULL),(27,13,3,NULL,NULL,NULL),(28,13,1,NULL,NULL,NULL),(29,14,7,NULL,NULL,NULL),(30,15,2,NULL,NULL,NULL),(31,16,7,NULL,NULL,NULL),(32,17,7,NULL,NULL,NULL),(33,18,3,NULL,NULL,NULL),(34,19,7,NULL,NULL,NULL),(35,20,2,NULL,NULL,NULL),(36,21,2,NULL,NULL,NULL),(37,22,1,NULL,NULL,NULL),(38,23,1,NULL,NULL,NULL),(39,24,1,NULL,NULL,NULL),(40,25,1,NULL,NULL,NULL),(41,26,2,NULL,NULL,NULL),(42,27,7,NULL,NULL,NULL),(43,28,2,NULL,NULL,NULL),(44,29,2,NULL,NULL,NULL),(45,30,2,NULL,NULL,NULL),(46,31,2,NULL,NULL,NULL),(47,32,2,NULL,NULL,NULL),(48,33,2,NULL,NULL,NULL),(49,34,1,NULL,NULL,NULL),(50,35,1,NULL,NULL,NULL),(51,36,1,NULL,NULL,NULL),(52,36,1,NULL,NULL,NULL),(53,38,1,NULL,NULL,NULL),(54,38,7,NULL,NULL,NULL),(55,37,1,NULL,NULL,NULL),(56,39,1,NULL,NULL,NULL),(57,40,1,NULL,NULL,NULL),(58,41,7,NULL,NULL,NULL),(59,42,2,NULL,NULL,NULL),(60,43,2,NULL,NULL,NULL),(61,44,7,NULL,NULL,NULL),(62,45,1,NULL,NULL,NULL),(63,46,2,NULL,NULL,NULL),(64,47,1,NULL,NULL,NULL),(65,48,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `materialProduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materials`
--

DROP TABLE IF EXISTS `materials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (1,'madera',NULL,NULL,NULL),(2,'metal',NULL,NULL,NULL),(3,'plástico',NULL,NULL,NULL),(4,'roble',NULL,NULL,NULL),(5,'quebracho',NULL,NULL,NULL),(6,'arpillera',NULL,NULL,NULL),(7,'tela',NULL,NULL,NULL);
/*!40000 ALTER TABLE `materials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) DEFAULT NULL,
  `paymentId` int(11) DEFAULT NULL,
  `shipmentId` int(11) DEFAULT NULL,
  `statusId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_idx` (`cartId`),
  KEY `payment_idx` (`paymentId`),
  KEY `ship_idx` (`shipmentId`),
  KEY `status_idx` (`statusId`),
  CONSTRAINT `cart` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `payment` FOREIGN KEY (`paymentId`) REFERENCES `paymentMethods` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `ship` FOREIGN KEY (`shipmentId`) REFERENCES `Shipments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `status` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,2,1,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentMethods`
--

DROP TABLE IF EXISTS `paymentMethods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paymentMethods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `method` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentMethods`
--

LOCK TABLES `paymentMethods` WRITE;
/*!40000 ALTER TABLE `paymentMethods` DISABLE KEYS */;
INSERT INTO `paymentMethods` VALUES (1,'Tarjeta de Crédito',NULL,NULL,NULL),(2,'Tarjeta de Débito',NULL,NULL,NULL),(3,'Mercado Pago',NULL,NULL,NULL),(4,'Efectivo',NULL,NULL,NULL);
/*!40000 ALTER TABLE `paymentMethods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `collectionId` int(11) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `measurements` varchar(45) DEFAULT NULL,
  `weigth` varchar(45) DEFAULT NULL,
  `topSales` tinyint(1) DEFAULT NULL,
  `recommended` tinyint(1) DEFAULT NULL,
  `discount` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `collectionId_idx` (`collectionId`),
  KEY `categoryId_idx` (`categoryId`),
  CONSTRAINT `cat` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `collectionId` FOREIGN KEY (`collectionId`) REFERENCES `collections` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Mesa de madera','Mesa de madera',12000,'producto-1597248710641.jpeg',2,1,12,'150 cm x 145 cm','55',1,1,'0',NULL,'2020-09-02 18:47:02',NULL),(2,'Banco Blanco','Banco Blanco',6500,'producto-1597248730648.jpeg',4,3,6,'100 cm x 50 cm','5',0,1,'15',NULL,'2020-08-12 16:12:29',NULL),(3,'Silla Mexicana','Silla mexicana mecedora',5000,'producto-1597264160512.jpg',1,2,12,'150 cm x 25 cm ','40',1,1,'30','2020-08-12 16:10:23','2020-09-02 15:36:33',NULL),(4,'Lámpara metálica','Lampara de pie ',3000,'producto-1597263908823.jpeg',2,4,45,'150 cm x 25 cm ','3',1,1,'0','2020-08-12 17:33:32','2020-08-27 21:10:38',NULL),(5,'Lámpara de pie','Lámpara blanca ',7000,'producto-1597365993957.jpeg',3,4,10,'200 cm x 35 cm','8',0,0,'15','2020-08-14 00:46:33','2020-09-07 17:29:11',NULL),(7,'Estantería','Pack de 3 estantes',8000,'producto-1598561997059.jpeg',1,9,50,'200 cm x 6 cm','2',1,0,'30',NULL,'2020-09-02 15:36:12',NULL),(8,'Banco de Madera','Banco reciclado gastado',3200,'producto-1599063294557.jpeg',4,3,1,'150 cm x 35 cm','3',0,0,'0',NULL,'2020-09-02 16:19:13',NULL),(9,'Mesa de Luz','Mesa rústica velador',4300,'producto-1599064181609.jpeg',3,1,7,'100 cm x 45 cm','2.5',0,0,'0',NULL,'2020-09-02 16:29:41',NULL),(10,'Silla Blanca de Mimbre','Silla de arpillera y metal',3000,'producto-1599064212693.jpg',1,2,9,'140 cm x 50 cm','1',1,1,'0',NULL,'2020-09-02 16:30:12',NULL),(11,'Maceta ','Maceta mediana de Madera',1000,'producto-1599064685630.jpeg',2,9,15,'50 cm x 50 cm','1',0,0,'0',NULL,'2020-09-02 16:38:05',NULL),(12,'Perchero de pie','Perchero multiuso',6000,'producto-1599071474731.jpeg',3,9,15,'200 cm x 150 cm','4',0,1,'15',NULL,'2020-09-02 18:31:14',NULL),(13,'Sillas negras','Sillas de plástico, set x2',8000,'producto-1599071781003.jpeg',1,2,45,'150 cm x 55 cm','3',1,0,'0',NULL,'2020-09-02 18:36:21',NULL),(14,'Sillón Amarrillo','Sillón reciclado 1974',15000,'producto-1599072041004.jpeg',4,5,1,'245 cm x 145 cm','11',0,1,'0',NULL,'2020-09-02 18:40:41',NULL),(15,'Lampara celeste','Lampara vintage para escritorio',1350,'producto-1599072907782.jpeg',4,4,1,'27 cm x 10 cm','0.5',0,0,'0',NULL,'2020-09-02 18:55:07',NULL),(16,'Sillón gris','Sillón velvet ',20000,'producto-1599073101853.jpeg',3,5,5,'350 cm x 75 cm','23',0,0,'0',NULL,'2020-09-02 18:58:21',NULL),(17,'Sillón blanco','Sillón individual classic',17000,'producto-1599073249143.jpeg',1,5,5,'170 cm x 90 cm','5',1,0,'0',NULL,'2020-09-02 19:00:49',NULL),(18,'Sillas blancas','Sillas de plástico, set x2',8000,'producto-1599073333854.jpeg',1,2,45,'150 cm x 55 cm','3',1,1,'0',NULL,'2020-09-02 19:02:13',NULL),(19,'Alfombra roja','Alfombra marroquí',35000,'producto-1599073481046.jpg',1,9,2,'270 cm x 170 cm','3',1,0,'0',NULL,'2020-09-02 19:04:41',NULL),(20,'Lámpara blanca','Lámpara de velador',1200,'producto-1599073576175.jpeg',1,4,6,'35 cm x 12 cm','1',0,0,'15',NULL,'2020-09-02 19:06:16',NULL),(21,'Lampara geométrica','Lámpara colgante de metal',4000,'producto-1599073674962.jpeg',3,4,15,'25 cm x 35 cm ','1',1,0,'30',NULL,'2020-09-02 19:07:54',NULL),(22,'Banco de madera','Banco de bar, rústico',3200,'producto-1599073863786.jpeg',2,3,14,'75 cm x 29 cm ','2',1,0,'0',NULL,'2020-09-02 19:11:03',NULL),(23,'Cómoda de madera','Cómoda mediana con cajones',5000,'producto-1599074042038.jpeg',2,8,20,'140 cm x 230 cm ','5',0,1,'0',NULL,'2020-09-02 19:14:02',NULL),(24,'Cómoda para niños','Cómoda de madera con estantes',5500,'producto-1599074055684.jpeg',1,8,4,'120 cm x 330 cm ','3',1,0,'15',NULL,'2020-09-02 19:14:15',NULL),(25,'Cuadritos ','Decoración para la pared',1100,'producto-1599074169431.jpeg',1,9,15,'20 cm x 20 cm ','0.2',0,0,'0',NULL,'2020-09-02 19:16:09',NULL),(26,'Espejo rectangular','Espejo rectangular para apoyo',4000,'producto-1599074261580.jpeg',3,9,12,'35 cm x 62 cm ','2',1,0,'0',NULL,'2020-09-02 19:17:41',NULL),(27,'Sillón marrón ','Reciclado, de cuero',6500,'producto-1599074493271.jpeg',4,5,1,'150 cm x 170 cm ','9',0,0,'0',NULL,'2020-09-02 19:21:33',NULL),(28,'Lámpara geométrica bronce','Lámpara colgante',4000,'producto-1599081955621.jpeg',3,4,15,'25 cm x 35 cm ','1',1,0,'15',NULL,'2020-09-02 21:25:55',NULL),(29,'Lampara irregular','Lámpara de pie',5000,'producto-1599082041493.jpeg',3,4,4,'200 cm x 170 cm ','4',1,1,'0',NULL,'2020-09-02 21:27:21',NULL),(30,'Lámpara clásica','Lámpara de pie',3000,'producto-1599082118165.jpeg',1,4,2,'100 cm x 13 cm ','1',0,0,'0',NULL,'2020-09-02 21:28:38',NULL),(31,'Lámpara metálica','Lámpara de pie',2600,'producto-1599082250447.jpeg',3,4,7,'230 cm x 130 cm ','2',0,0,'30',NULL,'2020-09-02 21:30:50',NULL),(32,'Lámpara de techo','Campana',5000,'producto-1599082551639.jpeg',1,4,6,'100 cm x 120 cmm ','1',1,1,'15',NULL,'2020-09-02 21:35:51',NULL),(33,'Lamparas colgantes','Set de 3 lámparas',10000,'producto-1599082624976.jpeg',3,4,4,'120 cm x 130 cm ','1',1,0,'0',NULL,'2020-09-02 21:37:04',NULL),(34,'Mesa clásica','Mesa de madera para 4',10000,'producto-1599082689438.jpeg',1,1,12,'400 cm x 120 cm','6',0,1,'15',NULL,'2020-09-02 21:38:09',NULL),(35,'Cómoda veteada','Cómoda grande',4000,'producto-1599082823443.jpeg',2,8,3,'500 cm x 130 cm ','9',1,0,'0',NULL,'2020-09-02 21:40:23',NULL),(36,'Maceta flotante','Maseta chica de madera colgante',7000,'producto-1599083025854.jpeg',2,9,12,'30 cm x 30 cm','1',0,0,'0',NULL,'2020-09-02 21:43:45',NULL),(37,'Silla trenzada','Silla de jardín',2000,'producto-1599083034138.jpeg',2,2,20,'160 cm x 140 cm ','4',0,0,'30',NULL,'2020-09-02 21:43:54',NULL),(38,'Silla ovalada','Silla de interior',4000,'producto-1599083172131.jpeg',3,2,2,'130 cm x 120 cm','2',0,0,'0',NULL,'2020-09-02 21:46:12',NULL),(39,'Silla huevito','Silla colgante',5000,'producto-1599083268864.jpeg',1,2,10,'200 cm x 100 cm ','3',0,0,'0',NULL,'2020-09-02 21:47:48',NULL),(40,'Silla de madera','Maderas',4600,'producto-1599083322478.jpeg',1,2,34,'120 cm x 150 cm ','2',0,0,'0',NULL,'2020-09-02 21:48:42',NULL),(41,'Sillones vintage','Dos sillones de terciopelo',16000,'producto-1599083412126.jpeg',4,5,1,'130 cm x 150 cm ','6',0,1,'0',NULL,'2020-09-02 21:50:12',NULL),(42,'Espejo redondo','Colgante ',4000,'producto-1599083533758.jpeg',3,9,15,'100 cm x 100 cm','5',1,1,'0',NULL,'2020-09-02 21:52:13',NULL),(43,'Cama Rústica','Cabezal reciclado',7000,'producto-1599083947835.jpg',4,7,1,'230 cm x 250 cm ','15',0,0,'0',NULL,'2020-09-02 21:59:07',NULL),(44,'Cama azul','Dos piezas',9000,'producto-1599084112971.jpg',1,7,15,'230 cm x 180 cm ','15',0,0,'0',NULL,'2020-09-02 22:01:53',NULL),(45,'Cama individual','Una plaza, cabezal liso',45000,'producto-1599084121465.jpg',2,7,12,'150 cm x 200 cm ','12',0,1,'15',NULL,'2020-09-02 22:02:01',NULL),(46,'Cama minimal','Cama dos plazas',10000,'producto-1599084287953.jpg',3,7,4,'250 cm x 300 cm ','15',1,1,'0',NULL,'2020-09-02 22:04:47',NULL),(47,'Cama Trazos','Cama rústicade madera reciclada',8500,'producto-1599084295936.jpg',4,7,1,'200 cm x 170 cm ','12',0,0,'30',NULL,'2020-09-02 22:04:55',NULL),(48,'Cama clásica','Cabezal liso de madera',9000,'producto-1599084396796.jpg',1,7,14,'200 cm x 175 cm ','10',1,0,'0',NULL,'2020-09-02 22:06:36',NULL),(50,'Silla entablonada','Silla de madera de pino',6500,'producto-1599500313728.jpg',2,2,15,'40 cm x 43 cm x 85 cm','3',NULL,NULL,'15','2020-09-07 17:38:33','2020-09-07 17:38:33',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin',NULL,NULL,NULL),(2,'user',NULL,NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipments`
--

DROP TABLE IF EXISTS `shipments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shipments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `addressId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ad_idx` (`addressId`),
  CONSTRAINT `address` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipments`
--

LOCK TABLES `shipments` WRITE;
/*!40000 ALTER TABLE `shipments` DISABLE KEYS */;
INSERT INTO `shipments` VALUES (1,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `shipments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'aprobado',NULL,NULL,NULL),(2,'denegado',NULL,NULL,NULL),(3,'en camino',NULL,NULL,NULL),(4,'entregado',NULL,NULL,NULL),(5,'pendiente',NULL,NULL,NULL);
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `roleId_idx` (`roleId`),
  CONSTRAINT `roleId` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Pepe','Gomez','jgomez@gmail.com','$2b$10$QqyrxIeS8SMeY1YuVBFAm.i8f./O2UMN5y1yZ1AXLCAKLJpPymfT2','usuario-1599138433598.jpeg',2,NULL,'2020-09-03 13:09:00',NULL),(2,'Maria ','Lopez','mlopez@gmail.com','$2b$10$K3BQq.lN74Ku2t8ObDM.s.aLWOY4blptW8sOdXK/xX6dLQsqTVWnC','usuario-1599138441318.jpeg',2,NULL,'2020-09-03 13:09:11',NULL),(3,'Martin','Fernandez','mfernandez@gmail.com','$2b$10$vCZx8PeZqt1dfFbF3gc5seOGVuh6dAR45Geh2QguOzynbHnqzFSnS','usuario-1599138459062.jpeg',2,NULL,'2020-09-03 13:07:39',NULL),(4,'Juan','Estevez','jestevez@gmail.com','$2b$10$9KHXXBYcQxsUzGyM4h5.2.DmXlB8grH2nt2ofGTVxy58EdfYQZWgS','usuario-1599138465271.jpeg',2,'2020-08-17 19:30:39','2020-09-03 13:07:45',NULL),(5,'Lucia','Galli','lucia@bonhabite.com','$2b$10$I4/1mLMYzLTEj5Idyy92nujS4giMO9KRv31.tvGJvtUZQaaUmCcb6','usuario-1599138933434.jpg',1,'2020-09-03 12:38:05','2020-09-03 13:27:13',NULL),(6,'Exequiel ','Cocchi','exequiel@bonhabite.com','$2b$10$C8Ta/uDb7PcXXIhI33LEg.bqSb0t6IiO29ZFfe5W034U/CE9RsD6K','usuario-1599136736369.jpg',1,'2020-09-03 12:38:56','2020-09-03 13:14:49',NULL),(7,'Milton ','Slonim','milton@bonhabite.com','$2b$10$0aMHiWwppnQC2HUdGC8VwOWOraddtPFsMSwVGEsKvm4KG8zZUyQWq','usuario-1599136764837.jpg',1,'2020-09-03 12:39:24','2020-09-03 13:14:58',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'bonhabite'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-07 14:57:14
