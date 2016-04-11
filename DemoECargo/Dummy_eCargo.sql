/*
Navicat MySQL Data Transfer

Source Server         : maria
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : ecargo

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-04-10 16:25:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for brands
-- ----------------------------
DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Description` text,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Name` (`Name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brands
-- ----------------------------
INSERT INTO `brands` VALUES ('1', 'Samsung', 'Samsung company');
INSERT INTO `brands` VALUES ('2', 'Nokia', 'Nokia company');
INSERT INTO `brands` VALUES ('3', 'Apple', 'Apple company');
INSERT INTO `brands` VALUES ('4', 'HTC', 'HTC company');
INSERT INTO `brands` VALUES ('5', 'Sony', 'Sony company');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(100) NOT NULL,
  `Description` text,
  `Price` decimal(10,0) DEFAULT NULL,
  `Color` varchar(50) DEFAULT NULL,
  `DateCreated` datetime DEFAULT NULL,
  `AvailabilityStatus` tinyint(4) DEFAULT NULL,
  `BrandID` int(11) NOT NULL,
  `Image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ProductName` (`ProductName`),
  KEY `FK_product_brand` (`BrandID`),
  CONSTRAINT `FK_product_brand` FOREIGN KEY (`BrandID`) REFERENCES `brands` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('1', 'Iphone 6', 'Apple iPhone 6 Factory Sealed Unlocked Phone, 64GB (Gold)', '500', 'Gold', '2016-02-09 17:49:11', '1', '3', 'images/phone.jpg');
INSERT INTO `products` VALUES ('2', 'iPhone 6S', 'Apple iPhone 6S Factory Sealed Unlocked Phone, 64GB (Gold)', '700', 'Gold Rose', '2016-01-08 09:53:54', '1', '3', 'images/phone.jpg');
INSERT INTO `products` VALUES ('3', 'HTC One M7', 'HTC One M7 Factory Unlocked Cellphone, 32GB, Silver', '114', 'Silver', '2016-03-08 09:57:27', '1', '4', 'images/phone.jpg');
INSERT INTO `products` VALUES ('4', 'HTC One M9', 'HTC One M9 Factory Unlocked Cellphone, 32GB, Gunmetal Grey (Discontinued by Manufacturer)', '531', 'Grey ', '2016-02-08 10:00:38', '1', '4', 'images/phone.jpg');
INSERT INTO `products` VALUES ('5', 'Nokia Lumia 928', 'Nokia Lumia 928 32GB Unlocked GSM 4G LTE Windows Smartphone w/ 8MP Carl Zeiss Optics Camera - Black', '125', 'Black', '2016-01-08 10:03:05', '1', '2', 'images/phone.jpg');
INSERT INTO `products` VALUES ('6', 'Nokia 6700', 'Nokia 6700 Classic Gold Edition Unlocked Cell Cellular Mobile Phone EDGE and GPRS GSM', '210', 'Gold', '2016-03-07 10:03:58', '1', '2', 'images/phone.jpg');
INSERT INTO `products` VALUES ('7', 'Samsung Grand Prime', 'Samsung Galaxy Grand Prime DUOS 8GB Factory Unlocked GSM Smartphone -International Version- Gray', '142', 'Gray', '2016-02-07 10:05:33', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('8', 'Samsung Alpha G850a', 'Samsung Galaxy Alpha G850a 32GB Unlocked GSM 4G LTE Quad-Core Smartphone (Gold)', '279', 'Gold', '2016-01-07 10:06:26', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('9', 'Samsung Ace 4 Neo G318ML', 'Samsung Galaxy Ace 4 Neo G318ML Factory Unlocked GSM Dual-Core Android Smartphone - Black ', '77', 'Black', '2016-03-07 10:07:14', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('10', 'Samsung Star Pro DUOS S7262', 'Samsung Galaxy Star Pro DUOS S7262 Unlocked GSM Android 4.1 Smartphone - Black', '83', 'Black', '2016-02-07 10:07:50', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('11', 'Samsung S7 Edge - 32GB', 'Samsung Galaxy S7 Edge G935F 32GB Factory Unlocked GSM Smartphone International Version No Warranty (White)', '976', 'White', '2016-01-07 10:08:38', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('12', 'Samsung S7 Edge - 64GB', 'Samsung Galaxy S7 Edge G935F 32GB Factory Unlocked GSM Smartphone International Version No Warranty (White)', '976', 'Gold', '2016-03-07 10:08:38', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('13', 'Samsung S7 Edge - 128GB', 'Samsung Galaxy S7 Edge G935F 32GB Factory Unlocked GSM Smartphone International Version No Warranty (White)', '976', 'Black', '2016-02-07 10:08:38', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('14', 'Samsung S6 - 32GB - White', 'Samsung Galaxy S6 Factory Unlocked 32GB Smartphone', '499', 'White', '2016-01-07 10:25:45', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('16', 'Samsung S6 - 32GB - Black', 'Samsung Galaxy S6 Factory Unlocked 32GB Smartphone', '499', 'Black', '2016-03-07 10:25:45', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('17', 'Samsung S6 - 32GB - Gold', 'Samsung Galaxy S6 Factory Unlocked 32GB Smartphone', '499', 'Gold', '2016-02-07 10:25:45', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('18', 'Samsung S7 Edge - 32GB W', 'Samsung Galaxy S7 Edge G935F 32GB Factory Unlocked GSM Smartphone International Version No Warranty (White)', '1099', 'White', '2016-01-07 10:08:38', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('19', 'Samsung S7 Edge - 64GB B', 'Samsung Galaxy S7 Edge G935F 32GB Factory Unlocked GSM Smartphone International Version No Warranty (White)', '1099', 'Black', '2016-03-07 10:08:38', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('20', 'Samsung S7 Edge - 64GB G', 'Samsung Galaxy S7 Edge G935F 32GB Factory Unlocked GSM Smartphone International Version No Warranty (White)', '1099', 'Gold', '2016-02-07 10:08:38', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('21', 'Samsung S6 - 64GB - White', 'Samsung Galaxy S6 Factory Unlocked 32GB Smartphone', '599', 'White', '2016-01-07 10:25:45', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('22', 'Samsung S6 - 128GB - White', 'Samsung Galaxy S6 Factory Unlocked 32GB Smartphone', '699', 'White', '2016-03-07 10:25:45', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('23', 'Samsung S6 - 64GB - Black', 'Samsung Galaxy S6 Factory Unlocked 32GB Smartphone', '599', 'Black', '2016-02-07 10:25:45', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('24', 'Samsung S6 - 128GB G', 'Samsung Galaxy S6 Factory Unlocked 32GB Smartphone', '699', 'Black', '2016-01-07 10:25:45', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('25', 'Samsung S6 - 64GB', 'Samsung Galaxy S6 Factory Unlocked 32GB Smartphone', '599', 'Gold', '2016-03-07 10:25:45', '1', '1', 'images/phone.jpg');
INSERT INTO `products` VALUES ('26', 'Samsung S6 - 128GB', 'Samsung Galaxy S6 Factory Unlocked 32GB Smartphone', '699', 'Gold', '2016-02-07 10:25:45', '1', '1', 'images/phone.jpg');

-- ----------------------------
-- Table structure for reviews
-- ----------------------------
DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Rating` tinyint(4) NOT NULL,
  `Comment` text,
  `DateCreated` datetime DEFAULT NULL,
  `ProductID` int(11) NOT NULL,
  `Email` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`,`Email`),
  KEY `FK_review_product` (`ProductID`),
  CONSTRAINT `FK_review_product` FOREIGN KEY (`ProductID`) REFERENCES `products` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reviews
-- ----------------------------
INSERT INTO `reviews` VALUES ('1', '8', 'Good', '2016-04-08 17:51:47', '1', 'test1@gmail.com');
INSERT INTO `reviews` VALUES ('2', '8', 'Good', '2016-04-08 17:51:50', '4', 'test2@gmail.com');
INSERT INTO `reviews` VALUES ('3', '8', 'Good', '2016-04-08 17:51:52', '3', 'test3@gmail.com');
INSERT INTO `reviews` VALUES ('4', '8', 'Good', '2016-04-08 17:51:54', '6', 'test4@gmail.com');
INSERT INTO `reviews` VALUES ('5', '8', 'Good', '2016-04-08 17:51:55', '3', 'test5@gmail.com');
INSERT INTO `reviews` VALUES ('6', '8', 'Good', '2016-04-08 16:51:57', '8', 'test6@gmail.com');
INSERT INTO `reviews` VALUES ('7', '8', 'Good', '2016-04-08 17:51:58', '3', 'test7@gmail.com');
INSERT INTO `reviews` VALUES ('8', '8', 'Good ok', '2016-04-08 17:52:00', '1', 'test8@gmail.com');
INSERT INTO `reviews` VALUES ('9', '8', 'Good look', '2016-04-08 17:52:01', '1', 'test9@gmail.com');
INSERT INTO `reviews` VALUES ('10', '8', 'Good very ok', '2016-04-08 17:52:03', '1', 'test10@gmail.com');
INSERT INTO `reviews` VALUES ('11', '8', 'Good', '2016-04-08 17:52:04', '3', 'test11@gmail.com');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UserType` tinyint(4) DEFAULT NULL,
  `UserName` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `DateOfBirth` date DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UserName` (`UserName`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '1', 'cangpham', 'cangpham@gmail.com', '0000-00-00');
INSERT INTO `users` VALUES ('2', '1', 'test', 'test@gmail.com', '1993-05-07');

-- ----------------------------
-- Procedure structure for addReview
-- ----------------------------
DROP PROCEDURE IF EXISTS `addReview`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `addReview`(IN `email` varchar(100),IN `productId` int(11),IN `rating` int(11),IN `comment` varchar(255))
BEGIN
	INSERT INTO reviews (email, productId, rating, comment, dateCreated) VALUES (email, productId, rating, comment, NOW());

END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for getProductById
-- ----------------------------
DROP PROCEDURE IF EXISTS `getProductById`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductById`(IN `productId` int(11))
BEGIN
	SELECT
		p.ID,
		p.Description,
		p.ProductName,
p.Price,
p.Color,
p.Image
	FROM
		products p	
	WHERE
		p.ID = productId;

END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for getProductsByBrandId
-- ----------------------------
DROP PROCEDURE IF EXISTS `getProductsByBrandId`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductsByBrandId`(IN brandId INT(11), IN numberProduct INT(11))
BEGIN
	SELECT
		p.ID,
		p.ProductName,
		p.Image,
		p.Price
	FROM
		products p
	WHERE
		p.BrandID = brandId
	ORDER BY p.DateCreated DESC
	LIMIT numberProduct;
	END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for getReviewByProductId
-- ----------------------------
DROP PROCEDURE IF EXISTS `getReviewByProductId`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getReviewByProductId`(IN `productId` int(11))
BEGIN
	SELECT		
r.`Comment`,
r.Email,
r.Rating
	FROM
		reviews r	
	WHERE
		r.ProductID = productId;

END
;;
DELIMITER ;
