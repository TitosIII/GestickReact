CREATE DATABASE IF NOT EXISTS GESTICK;

USE Gestick ;

-- -----------------------------------------------------
-- Table mydb.`Gestick`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Gestick (
  idGestick INT NOT NULL AUTO_INCREMENT,
  Nombre VARCHAR(45) NOT NULL,
  Contrasenna VARCHAR(45) NOT NULL,
  PRIMARY KEY (idGestick));


-- -----------------------------------------------------
-- Table mydb.`Admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Admin (
  idAdmin INT NOT NULL AUTO_INCREMENT,
  AdNombre VARCHAR(45) NOT NULL,
  AdAppat VARCHAR(45) NOT NULL,
  AdApmat VARCHAR(45) NOT NULL,
  AdContrasenna VARCHAR(45) NOT NULL,
  Gestick_idGestick INT NOT NULL,
  Aactivo TINYINT NOT NULL,
  AdEmail VARCHAR(100) NOT NULL,
  PRIMARY KEY (idAdmin, Gestick_idGestick),
  CONSTRAINT fk_Admin_Gestick1
    FOREIGN KEY (Gestick_idGestick)
    REFERENCES Gestick (idGestick)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table mydb.`Marca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Marca (
  idMarca INT NOT NULL AUTO_INCREMENT,
  MarNombre VARCHAR(45) NOT NULL,
  PRIMARY KEY (idMarca));


-- -----------------------------------------------------
-- Table mydb.`Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Categoria (
  idCategoria INT NOT NULL AUTO_INCREMENT,
  CatNombre VARCHAR(45) NOT NULL,
  PRIMARY KEY (idCategoria));


-- -----------------------------------------------------
-- Table mydb.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Productos (
  idProductos INT NOT NULL AUTO_INCREMENT,
  PrNombre VARCHAR(45) NOT NULL,
  PrPrecio VARCHAR(45) NOT NULL,
  PrExistencias INT(100) NOT NULL,
  PrDescripcion VARCHAR(100) NULL,
  Admin_idAdmin INT NOT NULL,
  Marca_idMarca INT NOT NULL,
  Categoria_idCategoria INT NOT NULL,
  Pcodigo INT NOT NULL,
  PrURLimg VARCHAR(600) NOT NULL DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.importadoraespinoza.com%2Ffunda-para-empaque-al-vacio-19-micras-no-texturizada-100-unidades-al-vacio-20-26cm&psig=AOvVaw0dUPufBHpPKXl1Co7PLpr1&ust=1682020525393000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDLu_Hctv4CFQAAAAAdAAAAABAE',
  PRIMARY KEY (idProductos, Admin_idAdmin, Marca_idMarca, Categoria_idCategoria),
  CONSTRAINT fk_Productos_Admin
    FOREIGN KEY (Admin_idAdmin)
    REFERENCES Admin (idAdmin)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Productos_Marca1
    FOREIGN KEY (Marca_idMarca)
    REFERENCES Marca (idMarca)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Productos_Categoria1
    FOREIGN KEY (Categoria_idCategoria)
    REFERENCES Categoria (idCategoria)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.`Empleado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Empleado (
  idEmpleado INT NOT NULL AUTO_INCREMENT,
  EmNombre VARCHAR(45) NOT NULL,
  EmApat VARCHAR(45) NOT NULL,
  EmAmat VARCHAR(45) NOT NULL,
  EmContrasenna VARCHAR(150) NOT NULL,
  EmDireccion1 VARCHAR(500) NULL,
  EmDireccion2 VARCHAR(500) NULL,
  Admin_idAdmin INT NOT NULL,
  Admin_Gestick_idGestick INT NOT NULL,
  EmURLimg VARCHAR(600) NULL DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fflejedecosas.com%2Fcomo-crear-un-usuario-en-google-chrome-seguro-te-servira%2F&psig=AOvVaw1bHODCRENdLfwzukb-Ga5a&ust=1682019626152000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJiJg8XZtv4CFQAAAAAdAAAAABBM',
  PRIMARY KEY (idEmpleado, Admin_idAdmin, Admin_Gestick_idGestick),
  CONSTRAINT fk_Empleado_Admin1
    FOREIGN KEY (Admin_idAdmin , Admin_Gestick_idGestick)
    REFERENCES Admin (idAdmin , Gestick_idGestick)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table mydb.`Carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Carrito (
  idCarrito INT NOT NULL AUTO_INCREMENT,
  CarFecha DATE NOT NULL,
  Total FLOAT NOT NULL,
  idEmpleadoC INT NOT NULL,
  PRIMARY KEY (idCarrito));


-- -----------------------------------------------------
-- Table mydb.`Productos_has_Carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Productos_has_Carrito (
  Productos_idProductos INT NOT NULL,
  Productos_Admin_idAdmin INT NOT NULL,
  Productos_Marca_idMarca INT NOT NULL,
  Productos_Categoria_idCategoria INT NOT NULL,
  Carrito_idCarrito INT NOT NULL,
  ProVendidos INT NOT NULL,
  PRIMARY KEY (Productos_idProductos, Productos_Admin_idAdmin, Productos_Marca_idMarca, Productos_Categoria_idCategoria, Carrito_idCarrito),
  INDEX fk_Productos_has_Carrito_Carrito1_idx (Carrito_idCarrito ASC) VISIBLE,
  INDEX fk_Productos_has_Carrito_Productos1_idx (Productos_idProductos ASC, Productos_Admin_idAdmin ASC, Productos_Marca_idMarca ASC, Productos_Categoria_idCategoria ASC) VISIBLE,
  CONSTRAINT fk_Productos_has_Carrito_Productos1
    FOREIGN KEY (Productos_idProductos , Productos_Admin_idAdmin , Productos_Marca_idMarca , Productos_Categoria_idCategoria)
    REFERENCES Productos (idProductos , Admin_idAdmin , Marca_idMarca , Categoria_idCategoria)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Productos_has_Carrito_Carrito1
    FOREIGN KEY (Carrito_idCarrito)
    REFERENCES Carrito (idCarrito)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

show tables;

INSERT INTO gestick (idGestick, Nombre, Contrasenna) VALUES (1,'TitosChampionsSonicAdrianJoshuaGael','coquito');
SELECT * from gestick;

INSERT INTO admin (Adnombre, AdAppat, AdApmat, AdContrasenna, Gestick_idGestick, Aactivo, AdEmail) VALUES ('Alejandro','Sanchez','Cano','SoniLOMEJOR',1,1,'sanchez.cano.alejandro@gmail.com');
SELECT * FROM admin;

describe categoria;
INSERT INTO categoria (idCategoria, CatNombre) VALUES (1,'Lapices');
SELECT * FROM categoria;

SELECT E.idEmpleado as 'empleado' FROM admin A JOIN empleado E ON A.idAdmin = E.Admin_idAdmin where E.Admin_idAdmin=1;
SELECT E.idEmpleado as 'empleado' FROM admin A JOIN empleado E ON A.idAdmin = E.Admin_idAdmin;

SELECT COUNT(idEmpleadoC) FROM carrito WHERE carrito.idEmpleadoC = 1;

SELECT COUNT(idEmpleadoC) FROM carrito WHERE carrito.idEmpleadoC = 1;

SELECT COUNT(idEmpleadoC) FROM carrito WHERE CarFecha BETWEEN '2023-03-01' AND '2023-03-31' AND carrito.idEmpleadoC = 1;

SELECT * FROM productos_has_carrito;
SELECT * FROM carrito;

SELECT SUM(provendidos) FROM productos_has_carrito 	WHERE Productos_Admin_idAdmin = 1;
SELECT SUM(provendidos) as 'productosVendidos' FROM productos_has_carrito JOIN carrito ON productos_has_carrito.Carrito_idCarrito = carrito.idCarrito WHERE productos_has_carrito.Productos_Admin_idAdmin = 1 AND carrito.CarFecha BETWEEN '2023-04-01' AND '2023-04-30';

SELECT SUM(Total) as 'total de ganancias' FROM Carrito JOIN productos_has_carrito ON carrito.idCarrito = productos_has_carrito.Carrito_idCarrito WHERE productos_has_carrito.Productos_Admin_idAdmin = 1 AND carrito.CarFecha BETWEEN '2023-04-01' AND '2023-04-30';

SELECT * FROM productos_has_carrito JOIN carrito ON productos_has_carrito.Carrito_idCarrito = carrito.idCarrito WHERE carrito.CarFecha BETWEEN '2023-04-01' AND '2023-04-30';

show tables;

SELECT * FROM marca;
SELECT * FROM categoria;
SELECT * FROM productos_has_carrito;
SELECT * FROM carrito;
SELECT * FROM productos;
SELECT * FROM empleado;
SELECT * FROM admin;
SELECT * FROM gestick;

select * from marca;
desc productos;

INSERT INTO productos (idProductos, PrNombre, PrPrecio, PrExistencias, PrDescripcion,Admin_idAdmin,Marca_idMarca,Categoria_idCategoria,Pcodigo,PrURLimg) VALUES (329268272, "Paquete de papel", 500,30, "a", 316845,1,1,0,"https://res.cloudinary.com/dkhzhsqzh/image/upload/v1685067346/emp/markof1wvljlz9wiqhsq.jpg");

SELECT COUNT(idAdmin) as 'Membresías' FROM admin;

SELECT SUM(Total) FROM carrito WHERE CarFecha BETWEEN '2023-01-01' AND '2023-12-31';  

SELECT COUNT(idEmpleado) FROM empleado;
SELECT idProductos FROM productos WHERE Admin_idAdmin = 1;

SELECT SUM(provendidos) as 'productos vendidos individuales' FROM productos_has_carrito JOIN carrito ON productos_has_carrito.Carrito_idCarrito = Carrito_idCarrito JOIN empleado ON empleado.idEmpleado = carrito.idEmpleadoC WHERE productos_has_carrito.Productos_Admin_idAdmin = 1 AND empleado.Admin_idAdmin = 1 AND productos_has_carrito.Productos_idProductos = 1;

SELECT EmNombre FROM empleado Where Admin_idAdmin = 1;

desc Marca;

SELECT * FROM Marca;

SELECT * FROM Marca ORDER BY MarNombre ASC;

INSERT INTO Marca (idMarca, MarNombre) VALUES (1, "Otros"),
(2, "Bic"),
(3, "LeCaroz"),
(351, "Razer"),
(352, "SteelSeries"),
(353, "Corsair"),
(354, "HyperX"),
(355, "Cooler Master"),
(356, "Thermaltake"),
(357, "ASUS"),
(358, "MSI"),
(359, "Gigabyte"),
(360, "EVGA"),
(361, "Zotac"),
(362, "PowerColor"),
(363, "Sapphire"),
(364, "XFX"),
(365, "G.Skill"),
(366, "Kingston"),
(367, "Crucial"),
(368, "ADATA"),
(369, "Western Digital"),
(370, "Seagate"),
(371, "Samsung"),
(372, "SanDisk"),
(373, "Intel"),
(374, "AMD"),
(375, "NVIDIA"),
(376, "AOC"),
(377, "ASUS"),
(378, "BenQ"),
(379, "Dell"),
(380, "LG"),
(381, "Samsung"),
(382, "ViewSonic"),
(383, "HP"),
(384, "Canon"),
(385, "Epson"),
(386, "Brother"),
(387, "Xerox"),
(388, "HP"),
(389, "Logitech"),
(390, "Microsoft"),
(391, "Apple"),
(392, "Samsung"),
(393, "Fitbit"),
(394, "Garmin"),
(395, "Xiaomi"),
(396, "Huawei"),
(397, "Sony"),
(398, "Bose"),
(399, "JBL"),
(251, "Vans"),
(252, "Converse"),
(253, "Adidas"),
(254, "Nike"),
(255, "Puma"),
(256, "New Balance"),
(257, "Reebok"),
(258, "Under Armour"),
(259, "Timberland"),
(260, "Dr. Martens"),
(261, "Skechers"),
(262, "Crocs"),
(263, "Fila"),
(264, "Salomon"),
(265, "Merrell"),
(266, "Columbia"),
(267, "The North Face"),
(268, "Patagonia"),
(269, "Marmot"),
(270, "Arc'teryx"),
(271, "Oakley"),
(272, "Ray-Ban"),
(273, "Burberry"),
(274, "Gucci"),
(275, "Prada"),
(276, "Versace"),
(277, "Louis Vuitton"),
(278, "Coach"),
(279, "Michael Kors"),
(280, "Kate Spade"),
(281, "Calvin Klein"),
(282, "Tommy Hilfiger"),
(283, "Ralph Lauren"),
(284, "Levi's"),
(285, "Diesel"),
(286, "Guess"),
(287, "Gap"),
(288, "Zara"),
(289, "H&M"),
(290, "Forever 21"),
(291, "Uniqlo"),
(292, "Topshop"),
(293, "ASOS"),
(294, "Urban Outfitters"),
(295, "American Eagle"),
(296, "Abercrombie & Fitch"),
(297, "Hollister"),
(298, "Victoria's Secret"),
(299, "Bath & Body Works"),
(301, "Colgate"),
(302, "Crest"),
(303, "Oral-B"),
(304, "Listerine"),
(305, "Scope"),
(306, "Axe"),
(307, "Dove"),
(308, "Old Spice"),
(309, "Nivea"),
(310, "Gillette"),
(311, "Schick"),
(312, "Bic"),
(313, "Garnier"),
(314, "L'Oréal"),
(315, "Maybelline"),
(316, "Revlon"),
(317, "CoverGirl"),
(318, "NYX"),
(319, "Rimmel"),
(320, "Essie"),
(321, "Sally Hansen"),
(322, "OPI"),
(323, "Neutrogena"),
(324, "Cetaphil"),
(325, "Aveeno"),
(326, "Eucerin"),
(327, "CeraVe"),
(328, "Vaseline"),
(329, "Palmer's"),
(330, "Coppertone"),
(331, "Banana Boat"),
(332, "Aussie"),
(333, "Pantene"),
(334, "Herbal Essences"),
(335, "Head & Shoulders"),
(336, "TRESemmé"),
(337, "Garnier Fructis"),
(338, "Suave"),
(339, "Dove"),
(340, "Irish Spring"),
(341, "Olay"),
(342, "Dial"),
(343, "Nivea"),
(344, "Cetaphil"),
(345, "Aveeno"),
(346, "Neutrogena"),
(347, "CeraVe"),
(348, "Eucerin"),
(349, "Coppertone"),
(350, "Banana Boat"),
(151, "Ferrero Rocher"),
(152, "Nutella"),
(153, "Kinder"),
(154, "Milka"),
(155, "Toblerone"),
(156, "Lindt"),
(157, "Nestlé"),
(158, "Mars"),
(159, "Snickers"),
(160, "Kit Kat"),
(161, "Twix"),
(162, "Bounty"),
(163, "Reese's"),
(164, "Hershey's"),
(165, "Skittles"),
(166, "M&M's"),
(167, "Haribo"),
(168, "Trolli"),
(169, "Lays"),
(170, "Pringles"),
(171, "Doritos"),
(172, "Cheetos"),
(173, "Ruffles"),
(174, "Tostitos"),
(175, "Fritos"),
(176, "SunChips"),
(177, "Quaker"),
(178, "Kellogg's"),
(179, "Nabisco"),
(180, "Oreo"),
(181, "Chips Ahoy"),
(182, "Ritz"),
(183, "Trident"),
(184, "Orbit"),
(185, "Stride"),
(186, "Extra"),
(187, "Mentos"),
(188, "Dentyne"),
(189, "Airheads"),
(190, "Nerds"),
(191, "Jolly Rancher"),
(192, "Sour Patch Kids"),
(193, "Swedish Fish"),
(194, "Twizzlers"),
(195, "Starburst"),
(196, "Skittles"),
(197, "M&M's"),
(198, "Hershey's"),
(199, "Reese's"),
(200, "Milky Way"),
(201, "Snickers"),
(202, "Twix"),
(203, "Almond Joy"),
(204, "York"),
(205, "Hershey's Kisses"),
(206, "Hershey's Hugs"),
(207, "Hershey's Nuggets"),
(208, "Hershey's Symphony"),
(209, "Lindt Lindor"),
(210, "Ghirardelli"),
(211, "Godiva"),
(212, "Toblerone"),
(213, "Ferrero Rocher"),
(214, "Cadbury"),
(215, "Kinder"),
(216, "Nestlé"),
(217, "Skippy"),
(218, "Jif"),
(219, "Peter Pan"),
(220, "Nutella"),
(221, "Smucker's"),
(222, "Welch's"),
(223, "Heinz"),
(224, "Hunt's"),
(225, "Campbell's"),
(226, "Knorr"),
(227, "Hidden Valley"),
(228, "McCormick"),
(229, "Lawry's"),
(230, "Old Bay"),
(231, "Hellmann's"),
(232, "Kraft"),
(233, "Kikkoman"),
(234, "Soy Vay"),
(235, "La Choy"),
(236, "General Mills"),
(237, "Betty Crocker"),
(238, "Pillsbury"),
(239, "Duncan Hines"),
(240, "Bisquick"),
(241, "Quaker Oats"),
(242, "Kellogg's"),
(243, "Post"),
(244, "Honey Bunches of Oats"),
(245, "Bob's Red Mill"),
(246, "Barilla"),
(247, "Ragu"),
(248, "Bertolli"),
(249, "Prego"),
(250, "Classico"),
(51, "Deliciosas"),
(52, "La Moderna"),
(53, "Capullo"),
(54, "Gatorade"),
(55, "Bonafont"),
(56, "Jumex"),
(57, "Lala"),
(58, "Sabritas"),
(59, "Gamesa"),
(60, "Ricolino"),
(61, "Nutella"),
(62, "Snickers"),
(63, "Milka"),
(64, "Fanta"),
(65, "Sprite"),
(66, "7UP"),
(67, "Mountain Dew"),
(68, "Dr. Pepper"),
(69, "Red Bull"),
(70, "Monster"),
(71, "Rockstar"),
(72, "Halls"),
(73, "Trident"),
(74, "Chupa Chups"),
(75, "Skittles"),
(76, "M&M's"),
(77, "Twix"),
(78, "Kit Kat"),
(79, "Haribo"),
(80, "Kinder"),
(81, "Lindt"),
(82, "Ruffles"),
(83, "Doritos"),
(84, "Cheetos"),
(85, "Takis"),
(86, "Pringles"),
(87, "Tostitos"),
(88, "Lay's Stax"),
(89, "Oreo"),
(90, "Chips Ahoy!"),
(91, "Nestlé Crunch"),
(92, "Mars"),
(93, "Bounty"),
(94, "Hershey's Kisses"),
(95, "York"),
(96, "Starburst"),
(97, "Jolly Rancher"),
(98, "Milky Way"),
(99, "Toblerone"),
(100, "Ritter Sport"),
(101, "Bimbo"),
(102, "Wonder"),
(103, "Marinela"),
(104, "Barcel"),
(105, "Sabrositas"),
(106, "La Costeña"),
(107, "Herdez"),
(108, "Knorr"),
(109, "Maggi"),
(110, "Gallo"),
(111, "Corona"),
(112, "Modelo"),
(113, "Indio"),
(114, "Victoria"),
(115, "Bohemia"),
(116, "Tecate"),
(117, "XX Lager"),
(118, "Negra Modelo"),
(119, "Dos Equis"),
(120, "Tecate Light"),
(121, "Sol"),
(122, "Heineken"),
(123, "Stella Artois"),
(124, "Budweiser"),
(125, "Beck's"),
(126, "Pepsi"),
(127, "Coca-Cola"),
(128, "Mirinda"),
(129, "Fresca"),
(130, "Manzanita Sol"),
(131, "Sidral Mundet"),
(132, "Jarritos"),
(133, "Squirt"),
(134, "Canada Dry"),
(135, "Schweppes"),
(136, "Limonada"),
(137, "Agua Mineral"),
(138, "Vino Tinto"),
(139, "Vino Blanco"),
(140, "Vodka"),
(141, "Ron"),
(142, "Whisky"),
(143, "Tequila"),
(144, "Mezcal"),
(145, "Brandy"),
(146, "Ginebra"),
(147, "Campari"),
(148, "Coñac"),
(149, "Amaretto"),
(150, "Licor de Café"),
(4, "Sabritas"),
(5, "Bimbo"),
(6, "Lala"),
(7, "Nestlé"),
(8, "Kellogg's"),
(9, "Barcel"),
(10, "Gamesa"),
(11, "Danone"),
(12, "Marinela"),
(13, "Knorr"),
(14, "Herdez"),
(15, "Alpura"),
(16, "La Costeña"),
(17, "D'Gari"),
(18, "Zote"),
(19, "Pinalen"),
(20, "Colgate"),
(21, "Palmolive"),
(22, "Cloralex"),
(23, "Pinol"),
(24, "Fabuloso"),
(25, "Pringles"),
(26, "Hershey's"),
(27, "Maggi"),
(28, "Milo"),
(29, "Ferrero Rocher"),
(30, "Don Julio"),
(31, "Patrón"),
(32, "Corona"),
(33, "Heineken"),
(34, "Modelo"),
(35, "Indio"),
(36, "Victoria"),
(37, "Dos Equis"),
(38, "Tecate"),
(39, "Boing"),
(40, "Del Valle"),
(41, "Jumex"),
(42, "Yoplait"),
(43, "Sello Rojo"),
(44, "Lays"),
(45, "Gansito"),
(46, "Mazapan"),
(47, "Nito"),
(48, "Tang"),
(49, "Milanesa"),
(50, "Ducal");

SELECT * FROM Marca;

SELECT EmNombre,PrNombre, CarFecha,ProVendidos FROM productos INNER JOIN productos_has_carrito ON productos.idProductos = productos_has_carrito.Productos_idProductos INNER JOIN carrito ON productos_has_carrito.Carrito_idCarrito = carrito.idCarrito INNER JOIN empleado ON carrito.idEmpleadoC = empleado.idEmpleado WHERE productos.Admin_idAdmin = 1 AND carrito.CarFecha BETWEEN '2023-05-01' AND '2023-05-31';

SELECT carrito.idEmpleadoC ,PrNombre as 'x', SUM(ProVendidos) as 'y' FROM productos_has_carrito INNER JOIN carrito ON productos_has_carrito.Carrito_idCarrito = carrito.idCarrito INNER JOIN productos ON productos_has_carrito.Productos_idProductos = productos.idProductos WHERE carrito.idEmpleadoC = 1 AND productos_has_carrito.Productos_idProductos = 1  AND productos_has_carrito.Productos_Admin_idAdmin = 1 AND carrito.CarFecha BETWEEN '2023-05-01' AND '2023-05-31';

SELECT carrito.idEmpleadoC ,PrNombre as 'x', SUM(ProVendidos) as 'y' FROM productos_has_carrito INNER JOIN carrito ON productos_has_carrito.Carrito_idCarrito = carrito.idCarrito INNER JOIN productos ON productos_has_carrito.Productos_idProductos = productos.idProductos WHERE carrito.idEmpleadoC = 1 AND productos_has_carrito.Productos_idProductos = 1  AND productos_has_carrito.Productos_Admin_idAdmin = 1 AND carrito.CarFecha BETWEEN '2023-05-01' AND '2023-05-31';

SELECT PrNombre FROM productos WHERE Admin_idAdmin = 1;

SELECT idCarrito as 'txId', EmNombre as 'user', CarFecha as 'date', Total as 'cost' FROM carrito INNER JOIN empleado ON carrito.idEmpleadoC = empleado.idEmpleado AND carrito.CarFecha between '2023-05-01' AND '2023-05-31' AND empleado.Admin_idAdmin = 1;

SELECT AVG(Total) FROM carrito WHERE carFecha BETWEEN '2023-05-01' AND '2023-05-31';

SELECT idProductos,PrPrecio, ProVendidos, CarFecha FROM Productos INNER JOIN Productos_Has_Carrito ON Productos.idProductos = Productos_Has_Carrito.Productos_idProductos INNER JOIN carrito ON Productos_Has_Carrito.Carrito_idCarrito = carrito.idCarrito WHERE CarFecha between '2023-05-01' AND '2023-05-31' AND Productos.idProductos = 759666063;

