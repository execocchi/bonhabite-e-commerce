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
-- Dumping data for table `addressUser`
--

LOCK TABLES `addressUser` WRITE;
/*!40000 ALTER TABLE `addressUser` DISABLE KEYS */;
INSERT INTO `addressUser` VALUES (1,2,1,NULL,NULL,NULL),(2,3,2,NULL,NULL,NULL);
/*!40000 ALTER TABLE `addressUser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Las Heras',123,4,1050,'B','BsAs',NULL,NULL,NULL),(2,'Coronel Diaz',456,NULL,1600,NULL,'Tigre',NULL,NULL,NULL);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
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
INSERT INTO `categories` VALUES (1,'Mesas',NULL,NULL,NULL),(2,'Sillas',NULL,NULL,NULL),(3,'Bancos',NULL,NULL,NULL),(4,'Iluminacion',NULL,NULL,NULL),(5,'Sillones',NULL,NULL,NULL),(6,'Escritorios',NULL,NULL,NULL),(7,'Camas',NULL,NULL,NULL),(8,'Comodas',NULL,NULL,NULL),(9,'Otras',NULL,NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `collections`
--

LOCK TABLES `collections` WRITE;
/*!40000 ALTER TABLE `collections` DISABLE KEYS */;
INSERT INTO `collections` VALUES (1,'a','colecciona.jpg',NULL,NULL,NULL),(2,'b','coleccionb.jpeg',NULL,NULL,NULL),(3,'c','coleccionc.jpg',NULL,NULL,NULL),(4,'Reciclados','reciclados.jpeg',NULL,NULL,NULL),(5,'Ofertas','ofertas.jpeg',NULL,NULL,NULL);
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
INSERT INTO `colors` VALUES (1,'#FFFFFF',NULL,NULL,NULL),(2,'#000000',NULL,NULL,NULL),(3,'#9BA2AB',NULL,NULL,NULL),(4,'#345BDB',NULL,NULL,NULL),(5,'#A35E43',NULL,NULL,NULL),(6,'#FFE25E',NULL,NULL,NULL),(7,'#6A9C73',NULL,NULL,NULL),(9,'#B5513B',NULL,NULL,NULL),(10,'#74BCF2',NULL,NULL,NULL);
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
INSERT INTO `products` VALUES (1,'Mesa de madera','Mesa de Madera',12000,'producto-1597248710641.jpeg',1,1,12,'150 x 145','55',1,1,'0',NULL,'2020-08-17 20:25:33',NULL),(2,'Banco Blanco','Banco Blanco',6500,'producto-1597248730648.jpeg',1,3,6,'100 x 50','5',0,1,'15',NULL,'2020-08-12 16:12:29',NULL),(3,'Silla Mexicana','Silla mexicana mecedora',5000,'producto-1597264160512.jpg',3,2,12,'150 cm x 25 cm ','40',1,1,'Sin descuento','2020-08-12 16:10:23','2020-08-12 20:29:20',NULL),(4,'Lámpara metálica','Lampara de pie ',3000,'producto-1597263908823.jpeg',2,4,45,'150 cm x 25 cm ','3',1,1,'Sin descuento','2020-08-12 17:33:32','2020-08-12 20:30:13',NULL),(5,'Lámpara de pie','Lámpara blanca ',7000,'producto-1597365993957.jpeg',NULL,4,10,'200 cm x 35 cm','5',NULL,NULL,'Sin descuento','2020-08-14 00:46:33','2020-08-15 16:50:20',NULL);
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
-- Dumping data for table `shipments`
--

LOCK TABLES `shipments` WRITE;
/*!40000 ALTER TABLE `shipments` DISABLE KEYS */;
INSERT INTO `shipments` VALUES (1,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `shipments` ENABLE KEYS */;
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
INSERT INTO `users` VALUES (1,'Pepe','Gomez','jgomez@gmail.com','123456','usuario-1597269249915.jpeg',1,NULL,'2020-08-12 21:54:09',NULL),(2,'Maria ','Lopez','mlopez@gmail.com','$2b$10$785VhqQAL6M3BCnG2qonU.ktKymiMyShpwaMFQWl2xapoK2sqDXvy','usuario-1597269261592.jpeg',2,NULL,'2020-08-15 16:57:07',NULL),(3,'Martin','Fernandez','mfernandez@gmail.com','$2b$10$84kNBDVnnKuwhm1yVFx6DO6WqkNCAkRwPjGMSv6kWu8hSRigSu2uy','usuario-1597269271882.jpg',2,NULL,'2020-08-15 16:56:44',NULL),(4,'prueba ','login','login@gmail.com','$2b$10$Kx.AGvmFlyBwPSSi2pgN8OedtFKsYrqPfmfDs8p193prdlqsKfesO','usuario-1597692639683.jpg',NULL,'2020-08-17 19:30:39','2020-08-17 19:30:39',NULL);
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

-- Dump completed on 2020-08-19 13:02:14
