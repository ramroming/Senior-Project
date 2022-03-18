-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pet_clinic
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `personal_info`
--

DROP TABLE IF EXISTS `personal_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `address` varchar(150) NOT NULL,
  `phone_number` varchar(150) DEFAULT NULL,
  `photo` mediumblob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=192 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_info`
--

LOCK TABLES `personal_info` WRITE;
/*!40000 ALTER TABLE `personal_info` DISABLE KEYS */;
INSERT INTO `personal_info` VALUES (1,'rami','saad al deen','karabuk ','23423433',NULL),(2,'reem','alhalbouni','karabuk','3244432',NULL),(3,'Ilhami ','M.Orak','karabuk','1233212',NULL),(4,'bashar','alhalbouni','karabuk','3833299',_binary '�\��\�\0JFIF\0,,\0\0�\�\0_Exif\0\0II*\0\0\0\0\0\0=\0\0\0\Z\0\0\0\0\0\0\0Portrait of confident young medical doctor on blue background�\�[http://ns.adobe.com/xap/1.0/\0<?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\">\n	<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n		<rdf:Description rdf:about=\"\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:Iptc4xmpCore=\"http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/\"   xmlns:GettyImagesGIFT=\"http://xmp.gettyimages.com/gift/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:plus=\"http://ns.useplus.org/ldf/xmp/1.0/\"  xmlns:iptcExt=\"http://iptc.org/std/Iptc4xmpExt/2008-02-29/\" xmlns:xmpRights=\"http://ns.adobe.com/xap/1.0/rights/\" photoshop:Credit=\"Getty Images/iStockphoto\" GettyImagesGIFT:AssetID=\"1161336374\" xmpRights:WebStatement=\"https://www.istockphoto.com/legal/license-agreement?utm_medium=organic&amp;utm_source=google&amp;utm_campaign=iptcurl\" >\n<dc:creator><rdf:Seq><rdf:li>opolja</rdf:li></rdf:Seq></dc:creator><dc:description><rdf:Alt><rdf:li xml:lang=\"x-default\">Portrait of confident young medical doctor on blue background</rdf:li></rdf:Alt></dc:description>\n<plus:Licensor><rdf:Seq><rdf:li rdf:parseType=\'Resource\'><plus:LicensorURL>https://www.istockphoto.com/photo/license-gm1161336374-?utm_medium=organic&amp;utm_source=google&amp;utm_campaign=iptcurl</plus:LicensorURL></rdf:li></rdf:Seq></plus:Licensor>\n		</rdf:Description>\n	</rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"w\"?>\n�\�\0�Photoshop 3.0\08BIM\0\0\0\0\0jP\0opoljax\0=Portrait of confident young medical doctor on blue backgroundn\0Getty Images/iStockphoto�\�\0C\0\n\n\n\n\r\r#%$\"\"!&+7/&)4)!\"0A149;>>>%.DIC<H7=>;�\�\0C\n\r;(\"(;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;�\�\0�d\0�\�\0\0\0\0\0\0\0\0\0\0\0\0\0�\�\0\0\0\0\0\0\0\0\0\0\0\0�\�\0\0\0\0��-�dPR�E)`PP\n�\0(\0�\0\0\0@\0 \0�\0� !*�B�!\r�b���J�E)@\0��(((\0B��(X�֬\�a�Y\�\�-\0 \"J� LHHB\�YE)A�B\��\0���\0\n\0(�HP4K\�q\�>�\�\�\�}_G�f�\0�b@B�R�!\r�2)V�)A@\0�(h\0\�\��z2\��u5 \�U��ϫ׏��@@R!(B�!bCa�JR��`PPP\�(���D\0*��\�w\�ν�Z\��n�.>���f\0@\0b*��CVȥ)�)V��(\0(�\0R\0�\0\rg\�p\�\�\�s\�\�\�}vm�\�kD�Ϗ�~�\0�\�ټ\0 	APĄHbBVȠ�E[�\n\0(@(,\0\0\0P�\01O�\�\��=��t\�\�fVa.�뒾g�g\�\�\�\�%\0	BT!�B��R��KDPP@*�`\n\0\0(\0b�\'ǿ�\�\�\�g}Z\�\��S\\���^ߣ\�ݬ	@@@B�\"E�C\"�\���AA@(P(�(@\0�@��}7p��MuK\�y畬�K\�5\�k�?�ӌ 	\0  1%B�A�JR��D\n\n\n\0(QA`@\0-\0\0���y��k\\��t\�\�\�z3}l\�|�\'^�g͗ *\0@��DĄE)V�(\0�E\0�\0��\0�\�{\�\�\�\�kl��\�Dddc/�s\�ޯg\�\\�(@\Z�\�!C\"��JAA@(P(A@\0�A\n�˿w�\�\�/\"\��\�Y�\�y�������  !\0!*�B�()��\n\nP\n\n`P\0\0(8\�\�\���g��q�Y\�\��\\\�;\���q�}>Ks\0%\0 \"@*�LH\n\nR�%!AA@*�\0,\n\0\0\0A\0Q�N\�}�\�\�җӗ�\\\�i�׏�\��\0J\0D���!*!B���ZQ\0\n\n\n\nQ\0P\0 (\0�9�\�\�\�\�rӵ:$\�\�\�\�>���n�`!\0\"@	P�H@\nR�E(�HR��P\n P\0!@\0\0h�\��z>���۸\�O�g\�\�>�X\�\��b�(J \0���D�!AJP��\0���\n\0,\0\0\0\0\0\0�WO��\�1��\����\�\����\�>-s\0\0�@�\0@AP�	@R�-\0�((@\0�\0J@\0\0\0:�<�\�5�U�\�w���l\�s\��7\�M\�\0*\0@�T!�AD\n\n\n\�\0\0@\n\0A\0@\0\0�~.��\�\�\�/�}/n;챖u�\�?|�\\�\0\"@C�)B\����\n�\0��`O��\����/Q}\�G�\�6g@{�Mc�x�\0�\0@JĉPR��(\0�\n\0@@�:\�\�OG:�{c�>c�OwS\�,\�݋�YV!*�ӏx\�\�\"��\0 �!b��)AT\n\"�R�\n�@QP��%\�\�\��^��\�\��g��t\�\�v��}^Z�\� �\�\�ϗX�!\0 �!��ȥP\0�()@\0�\0\0\0B\0zX\�՝fk\\�թ\�\�\�Cg��\�\�[%\�Y\Z\�tHX�þ~~�@B��2(*�@AJ\0\0(���  !�_Sw\�]\�\�Y�\�q�\�\���\Z}q�5P�(!aX\'�׎��\0\0�!D�b��Q@�AJ\0*\�\0� �\"B\0z\\�wMe.�5�\�n<]\�\��\�\��E\��\0\n�v�qo�\0J�\"B\n�AT��@��\0@�(\�!\r�^�>\�\�Um�Ff&\�\�,�L\�\�+\�,aC2\0BšŬy�8� D�!�\nPQ\0A@\0�H�!�u���5\�.�:%\�O�N	~�����!��&��ӆ( !�%R\�)T���@ \"�D���}�]�\ZΙtY\�.F$>\\��D�d13% )�5�\�t\�\�@*!	P��P\�`P\0\0\0�!@@ClׯϷD��\�D��\�F♐�5�\'Mn�%\�ĉW\�\�\�]\�\0P��HC\Z��R�(�,P\0\0\0B�  :3\�\�\�\�#5\�f�\�3��\�\��5�Z쏯7��\�\�\�\�M\�\0\n��Jĥ,\nB�D\0( !AA@zx\�םtKMf�&\�أ�(1>@\��4�N_\\�F5�\�?|�u����L�b�\n��\0\0\0!B�r�|��ˁ��\�X��\"�k6��!O\�\�p\�(䏻L���\�\�ǓX�@BV)b��E\0\0C����\�\�\�Ǿ\�\�s��-U��#a㞳G\�i������>K7\�O�Z@dx�xj�\0J�� !k���@\n\0��$17\�{\\���}�\�\�w\�\�\�^�k�:\"ƺ\�J���\�N\�k֗\�O!?B^��G>��\�\�@B�A�\n\0(\n(�!Hc^�>ݼ��N2��YK�\�\�\��繞\�ا=c^lz\�g4\�\�\�\�t\��\Zϸm2	ü�o���B\���bd\nX��\0P,J�1!�o�~\�\�^u\�p�\�l\�kj.x�s\�\�\�v\\n6F�\�\�\�\�\��r\�f��\�}yuo�\'�þ*�bR��)HP\0X 	P\�!k���\�l�\Zq�8ޜ\�kf��κ�r\�f\�g���f\�\���vYe��9t\�g^HC<\�\�|�\0��!\n\nR���\0\0*Ȁ�)�\�d_S�^ɾ�\�(�1�.Vk�Y�Y�.\�\Z\�hBX�a��:{��&��s\�\�!B�HB\n�1()ADPP\0\0D%CI+�����3��Kr )�67�þ\�3�Z\��d\������\�A����u\�\n\n��!bC����( \0�\"II	l1Hbb��v;{\�,S2�̀�,�\�\�\�\�P�20<\�Y\�s\�i��\�Pr\�\��\�.@�A!AP�1J��((\0��X�����Nw\�g�R\�XƲ!�fL��\�|g.�\\cavFÊ\�.\�\�R��Ϡ6FD8w<Μ((!	P�)J�����\0��\"\�\�\�\�\�\�k\�\�^�\�rٵvFKaP�\�Lk�0�\�CA\�$�\�<�\�=��+\�ʚ\�\�\�xw�PPAP�A�L�\nPQ\0\0 !bC	zg^\�\�z\�.	�kHZ\�r��\�n5\r\Z���I�\�_5g��\rg�Ӟ�r��\0��kJdP��E\0�!������\�-�\�mZ`b��b�\\�Or^\�x7��\�\�\�S\�\�x����\�\�\�\�\�{�W��2\�R��T!�)JR�*�\0bC����1��\�\�Sy�D5�%�fvn=�q�Jd��T�\�̕$�@\�|�~��\\iJ\0\0���HC��PU(\0� �&$11101�\�\�8�\�ڝ5�\�MwD8�)9\�WBm6ّ�LJg�\\�JR�\0	P$!JPR��-�B�Ć&&&\�b`��]\�\'i\�[\�{y\�f\�\�\�\�Z�\�ͳ�Ēb��B��g�Tȥ�\0H@B�)@)J�PD!Hbbbb`ba.&&�,{\��g���\\�Bƴ\�\�g\r�\��\�A\�zկ\\r�R��R\0  !\nR���!HA�!LLLLLL%\��\�q�׺t\�\�jk\�\�}\�dfX1�]k4\�*h006�\�Ӆ*\nPP\0!C R��\0�D1!LLLLLL%\�\��\�^��y�uǫ�y۝Yo\�ʩ�e(�0�]h��_/�����\0\0@B\Z̊PPR�P\0!Hc\�q0LW	q10\\c��fnR�Y�~\�\�\�\�\���21!�i�\r�\�u\�\�)AA\01\0�?�\�\0.\0\0\0\0\0\0\0!1 \"P#2A`$034@C�\�\0\0�\��#\�R�Ϥ����\��ڵ-�<\�Y��\�ޢ�\�\"�a�%���\�\Z��C>�q^���\��6@q��u\�c\�!\rR�Lg�拀c`\�\Z�\".\�C�+��\�����4`�X	�\"0dc\�&(ҟЬ_�\"�2޵�\��\0вne�A\�\����?\�Y\����Z\��\n�כ[\�gKr����\�;lL�l\�]-��\0г\�\���p�z21�\�\�\��Z˯Rj~_\�Y���\�\r�8�L_���`ˆ�7*����P}��\�\�\�\� �^Xu����,�\�\�U���\�v֬\�R�荱\r\�,\�l:\��#};^�`�\��\�Z`ƴǰ\��ػ���\��9v��֭*`T*�,�ݡ�E\�]O\�V-�oǽ~�hDMu���QM�U\\\��/��\�\�\�\r���,�,g6�-B׶\\��\�ٹ�-3\��\Z\"m�bloП\�Y��zh|��T\�\�\�Q	��w+T\��,hS\�n/4(t5S����Z5\'o�J\�M�OïԾ�ƭ�B\�_=��E^ަ@ѱ\�\Z|\�F1h�m\Z{���b�\�m�ح�1�,���.��@Ѩ#\�\�\�H�@#\"6\�%�.�K@�G!\�G��f\�H�\���ӧɢ\�d�$I�\0\�\�\�\��\r�\��+��?�\�[\�`\���\�\�~g�Y\�ï��k\�� u�\Z\�y�m��\���\�\�\���~M;��y=�F�d\�\r�p\�\�{�f7>�\�}޿ϧ\�o�Q�l���E�\�0u\�\�H�\��\�\�\�4\��I�%�\���.\�U+�Ƕ��[���xe�-�] ���\�c�OH\���}#VS�pA�ۻ/\�=ah�OS\r��U\�\�[�bak(\�l9U\�uc\�\�\\4�\��\�k\�A\�C�]\�v��\0=N7/�_�xV(1\�\�f`��\�W{\�f�\���\��\�u�\��\�e�O\����7�Y�w\�\�\�>\'�\�\�?*�W�\�p\�4�d�\�b�S�y�.0]5\�[\�=x8/h�v\�~G*yl�c��&\�vFU,`\Zx��\��j�\'��u�Jo�]��7�+3��z�:�h��^\�\�E\�N\�|U�z(��7%#m�\�-xv\�\Z�k�ǤQO�\�ڿAһ�zW�\�\�a6Q�\�T	��]`h�v\�:5�ca%O\�\�]5,zT�\�֡�\�\�\�\�L��\�T��Җ��\�\�Y�\�:����bY�S\�OP!�\�8gCu�\��\��oh8={��Q�/�\�X�dN\�k;\�\�\Z\�!fɤMw�Mǯ\�\�\�T�ξ��͋4����\�&ٴCi\'s�\rf�{멟�}Zz�m=)Q�\��\�\�Tu�M!�F\�\'Ht�{f���\�I\�k׆�5���\�L\�k\���8�\�\�^Ic�\�\"�<X���e֣�\\�=�7�\�׎\�!�\�t\r���1է0��\ZA�D�dG\�\�[m�v����\�m\�㍧�\�k���MD-�6n#��\\Nd\�&�\0o9�\�e��>K| O#[\�����R�lR\�x�I��\�V�\�\�>�v\\�8��\�~8ʜO3Z�ir�\�\�l\�\�a�\�7���u��1��j����Y��\�An6sߛF�ȶ\�o�\�\�]\�\�\�c��\�$\Z���k\Z\�\�7�ܰ٤ў*Jїr��L� t�[QQeOS�Rܚ�Me\�O<0Q�c�=e�h=�KS�\'��O�\�\�g���\�,$VZr�Nm�$J�\�\�V��=\�6Yj�\Z\�k�X�.�A�Z�~U�X�!�&\�6��}��h[��6#	\�u�\�X�N��7��MD�\�\�(�\��\�D\�1\�\�y>\�M.\�\�Q�\�if\�i�|c)�&\�\�\�q\��A�(���Y�a/�l\�\��>��������\�M�m0���{~U`XTL5�i\�\�V��)\rp\�\Z�i��j�\�6�~V�z2\�Eѣ��\�>�\�\�&�\nVi4\���JG��Ǿ\'s\��\�0*������!N�G\��\0�?�\�\0&\0\0\0\0\0\0\0\0\0 1P`0@!2QAa�\�\0?\�*�l�l\��BVFQX\�)�WEJ\�Ƶ�d�DJ�\�)�\�e2�45]\r	X���\'�CDW��ߡ����ߡ��3aC,�$N/~���g���b�a$/\�/�>�ԌJ�^�\0��gо=����rʯ�\�TFE��HM�/	��ɽ�$\�\�Fe�,�6\�dZ>Oע�D^�	Y�.�2/ѹ��R\�\�/��\�\�\��R͌�t8���\�F\�CV8��\�\�)W�\�y\�+����j���5c�.��\��W�K�Jī\�\�\�k���j|�U�sے�\�2ߐ��\�ߐ��-���g�����#���cU\�\�~:*؅�\�q�\�\�י=o��\�i=rExҳ-8�o�XFM\nI�nQC^\��\�j�z#*? ��5xX�С�\�\�\�{j���љ�\�\�s�+\�����S㣷�\n޺+�\\tv�\�m6Yc�3�Z��B\�3�\�b�����\��_��7��\�e\�|�z+ı�QXf.ϱ<eʯ\�e�^��e��זܲ�\�ܲ\�Җ+Ֆ���\�\0&\0\0\0\0\0\0\0\0\0 10P`!@2ApQ�\�\0?\�%\�}�\�X\�\�s�J��Bz)0��ǄD&k*T�R�JzE\\\r��S��M\�Cru\�@����B�M�54��냑pR�:��SlPPc�?7\�@�\�\�%@�x\njܠ\0\�Ax��3=\�8!wǞ�\�hX_Fz\"\�/Ȧ�HC����\�&�MA\�\"��K�\0Rh�0�\�N�\�ؕ���4E(\Z�\�sschr��R��rni@�e(\�\r<�;\�z	\�\�\�\�\�\�o$v�^�9a\�r�9Z=�!�@\�=	\�n8�\�7{�G\�_bև�o\�(�\�(aO�QD\\\�;�\�\�+R^8�B%n\�ӝk]p㉱͕�l6K�\0˙p\�\�J\�-!ŧ\�Z\��78\�}\�\�\�\\8\��\�5iA���aiZV��F�\�\�\�QX��*����\�Y�D!dTsƺV(�4ұ\�b�HQp�;c���\�O�=/�\�\03\0	\0\0\0\0\0\0\0!1 \"02APQ`aq�BR�3@b���\��\�\0\0?\�n��V}��\�2\n��\�h{\ZJ�G��*\�B\�a�Ò�\�P�M��B�\�EE.v�!��v���\�>k�!�aٞ�K����U�(S\�~óoE%Q�t�Tc%W\�(`��$\0S~�p�~{����7䲸\�\rzv��#u+{=�[��٘!AUy�\n2A4y\�R:]fe`s`��B\�-~��98�M�\�P��+\�\�9A%ʂ\�3\�g�K\n�B\�B���c1\�T7b�\0�g|\�x\�2\�\\\�hSB;{]L\�\�@\�\�R��¥���\n�b6�\�p<\r؎J�uUW�\�*��\�\�\�Q{\��E���/\�wx9c�����y�T)UD��Y\'�)\�\�U�Ԉ[�\n�g�\�\�#G��;����S��g^7�I牥\��v\��/e(y7\�\�\�cz�\�;Ω\�9�z������ʛ�mO2��\�7\r+<��\Z�\�v\�\�\�6l\��;���SG�\�R\�i�a=4\�]8\�^\�\0(�x4-g\��,��h\�Ty�i̩��e��(\�;�s�&��\�9�A\�Dm��fƴ\�Z�/Ӳi�J\�� \�\�2<Ό�JpvA@\\B���o96�\�xi��<�}�\�1�S�\�\�\�ЃA��hr\�\'��\��PWJ(�\�\�TP�\�6��4���W7Bq\�\�G\�Y�\�B]�9�TD9�V�->�Y�WPU\r.ŧ\�t��!�ҵۨ���d:sQ7T*kU6t�\�t *�9\r\��Q���_�\�\�\�\� *�5Y,�ZZ�>y;|=vTQ\�\�\�c\\��\�\�o.�qn\Z)ν6\���5���\�\n�\"\�,#\\o\'4\�y�7\�T\�~��෌��\�K\�L�w��\��\�L�Oh\�\�Y�.�\�\�5�V�WG;�Y݅�*J\�.�j��Z��d��\�Z#MU��\�\�5\�\� \�\�\�P\����=\�\�dn\�f���,\�UE\�T>\�f]��́�k(�8\�\�z/S\�Ê�Z�\�+X�\0��y���d�ER\�R\�.�QTJ��G���\�*�Fk^Ť�Z�����*Zsȸ]�Իx��\�\�Y,�K%�pT\�&\�th䲾�fV�Y�z뇺�\�w\�\�;|�\\�\�U�\�O\��\�\0+\0\0\0\0\0\0!1AQaPq� `��@��\�0\����\�\0\0?!�\�TL-��]$F\�;E^\��\�{;�\�2\�\��\�U�\"�1Xq\��\r\�\�T���\�K�\�\�7��\0rs�?q\�\�\�q̃\�3MA��.\��	��obŵ\r�t�x�j�v}���m\�s�?\0�My\����Ej���ᾞϜ\�7]&�\�1��y:g\�\�}=�w�RW�!\�#]\�W\�a��\0�@��\�\��>e��w?2\�W\��<\�1\�1Ij�\��Aw�\��ԡOk�/�\�4�\�$��,\�\�y�\�x]|\�]	UX�	\"4�*��\�D�Å�TIw܆�!�\���\r�\�a�\�k���\�\�#\�\�\Z^��-jP�!�+\�\�\�\�u\��.7xn\�1�\�\�q�F ڲ\�-̙����2�\� !\�|.\�{�X\�m\�\�Jݕ�x�A����-JbKΝ$p\��\�Ia�hmޣ\�\�,�\�>\�\�pǈ�1�Q0�qX̱[��@����TNC\0���\�s\�eY\�ڀ+k�����T_�L\nb\�(nf�e�l>�\�5�k\�7x[üdo\�\�/��YfI�Q�c�2EN�K��\0���ǭ\\��d]Fd;0:f�=\�\\�H(\��鸓��\�\�ERS\��X\�\r&v\",\�\�l��Z���\�\��ܽQK\�o�\�J�P3�|1\n}gr\�\���B!8�a\�S\r\�\�\0�j�\�r{\�S�#\�\�\�\�\��\�Q)�\�\�\0��6�-\�L�N\�@`j\�%M\���\�y{P�\n�r\�\��\0��D\�� �:-\'\�r�O�B��\�?K-�\��#Д\��S�qs^�*_<D\��D|���b��9�KӞ�SeK\�SR�{36\Z�Ηr\�S���W\��HU�\�\�&�s\�M���=I����$\�T8�\�\�Dt��\�3����0�L\\�\�u�\Z\�\�Fr\�\�|g\�/�C\�/�\�\"��\�.\'5\�&Q\�\�J���x!\�g\��GP\�u\�\�\rC�Y�\��ר\r#�ClB\����K%1o3I�sq�i!�y��	���\'���ۣ\'Vq	E\�$����\�bMC>%���v\�\���\�L)�H�W�\��/ԯ.{���tÑb� ;�0C�d�\�w\�7���e$\�;g��� \�J�AO$K\��\0R�w���zY8��\�v\�ܖ�\\�)D�\�_5��ي\�\�!*\�*\�	B�\0\�K��\�f%v����ۚ����\�~�\�>���1\�1U�\�\Z+\�E]n#�XF[c��\�vJ��L�\�~>�v�\�0Fٞ��q\�\�ٙ\"c��#2VQ�`�7\�\�\�\�\���?2\�ir��\�^�\�a�8���iN\�\�?\�Ӯ:�e�\�=������\�P\�2=\�;�O\�\�*(�!٧�\�nݤ�Ov�#\�%�m\�\�s\�+v\�m�\�\�1��2*�{��6�U\�oL�r�[f�X����2�_\�V@f\�X|\�9\�4\�#��\�dg!e��S��_��L�x	D��x\�\�w��j=�̽\�7ֹ���Mz�m\�U\�\n	\�$r��2o|��� S\��6��W+K�ə�\�.l��e̻no�b�\��zc�\���\�\�b[������ǯ�	G�}\�K�\��\0r�q�\�\�\���1�0�#�\�\�(0g����\�\�*��utJ\Z��a�\�b\�\�\�\�%��)d\�j+R\�R�Ӌ�`F�<EhT��Yq�eF���K?)b#JSOx�\�\�X�-�N���7um�\��\�\��\nE�e\�<=����\�c��m�0DJw�\�WR\�oh&I�\�ߤ\�c2%\�/E\�\�r���0\��\�yJ\�q���p_\�@|�\03t�A���C\�\�wV.�\"�\�1\��3,�â��\\Q��\�\�^\�;\�\�K�\�\�<\\�\�%��;G2�*Q\��\0���\�c\�o�\�-/�8�\�F�\"���\��b	��\�VU\�g���>\��\0$Aj~c\�\�Y\�Go��&\�we\r\�f<J`T̴\�u+R�\�Lcx#-@���i5�w��\�`��zy\�l���x<�\�y?x\�Uqt5���\'2�4�\\@m�6ǳ7\0�s\n\�<y�\�f�\�Įc��C\�f1�ӣ��gP	^��\��]��ڕ��\�^e;Q\�7�wN8w�@\�\�nkr\�n�\�9=��ô\�5\�0��\0�d�\�`�~ڀ(��.?�%�c&n\rqZ{Ǌ�]n\�xȗ�\0�;		\�^��M\���0!M�5��aIF��\�#~A��\�F\�iC9�=�w�IU�\�\����\��\�\���RG\�f1�cs\�6�0Ma\�>̯oFۣ\�0�is7\�4jy!\�\�dW��m�\�%�&.D��\�\Z���~\�h5��&^\��ڦ��m	��\�\�1�c\�\�\�1\"�J\�\�Jdn�\�FS;�v�\�\��\��\0kU�Bۃ��D��M�b�\0(\�?iaQv\��\�OV1�c�G��*�R\��RSD���\��\�;��|\�s�\��\�W�����*��Ռc\�1�e��\�\�0\�b�qTw\�7{Kx\�H3��~�\�r�ߠ�q�c\�=\r��\��\�/\��c�8�S\�,c���$*\�/i\�5<\�(�f}�-�c\�1�K-��\�pЊ�3[K1ߣ�+�#*\�\�#0�O\�p�C���c\�1�c\�g\'(-b�F!�\�\�\�̨\�8�CV1�h�%J\�mQ�\r??\��\�\0\0\0\0\0\0��\�R�K6 \0-��I$�)\0\���\0zO\�$6]�\�\�%�|@�}���U*\��{$�\�\�J/\�f\r�\�e\�		��\�y,�\�+��KI���\��\0$�,�~\�	2�_�$�\�M��@$�u�\��\0o\�l��٧�Z}���A%\�sE4 {,�6߫~�d��\�$��[�\0��P�eL�H\�\�lM�\0S��0Y?݀A_�\0��Ki<\"�za\�$7�[D�\��4�ߛD7\�m��\0W\�\�\�v\���\�\�ߺ`Yeۤ_�\�\�P\0��]QɐC{K-&\��\�d��˷i�D�m��\0I�\�� >�I\0�\0\��L�,�|� \��\�r\�$�l �n�=����\0�n\�Yw���o�\�&$L�\0�KIi%\�\�ٴ\r�\��$\0.\�\��l\0B|��\0����@o\�h�,�~\0$_�\�u�M�;)|��\0r@\����\06�\��̐�m����L=\�Ϳ��C�\0�i%��H�$�|\� l\��\�f��&j\�\�\�5�\�\0ot�\0I.��\"[�\0�\0}\'۶�m9�X�Mo�$��\�0�ٳ\0\0�\�\�^\�$�\nZ7�\0��C\�Z@%/�d�e�6\0�$\0e�m�D I#\0���d�&\�n\��	�H\0$\�	\�Š նHm\�\0��\�E�M\�im��H �L�\�I\�\�\r_ހ@/\�$,�� J	�\0\"K=�,��(I}�\0\�� AI;I$ �O@���P	R\�{@\0��h��\�\�H\0A4 L���\0	�׶Ҁ\0_,\� ,�4RD�	$��C	\�o�\0\�Y�\�6\�{M�H-�i4	�\nH���Z_b	-�\07l��ϓI�Ai\��#\0\Z�I �H\0�\0\�����l���L�M��f\ZI&�:�A)-\�6�$\�$�6�\�^W���I\0�\0a?�K[b�M�A2\��I6�\0�\�~?4�E�{@\� 4�@/\�Lm�]dY�\�r x\0$)z�\Z\�Xk|\�o�\�L%�JM�mw0�\r\�	��/\�䀤�ْvͦ\�[,�\�/\�\�\��\ZM��\�Z�H3m-�� \�m�\�$�Ye�}\�\0\Zh \�s�	V��\��\0�A_t\�d	%�Yl�q�\�12S\�II9k\0E-�$6\�$�$Kl�\�$�\�I;�̂\r\��4��\�@I\0�I���\�`6A\\2-�\�\rUњ$:H!5���@�\�m�,�Y}G,$�B\�\�B�@{�\0\0�A�6\�M�$\�L\�/�Z\��͘\�SM6�H�%ɶ\�.~JH8M\�T���\�\�/X\�\�!�\0`\0`	\�m��M��	\�@z��\�).�-4��A\�6$�m&\�	$\�߮v$\�Q-$\�o\�l$\'� \0e���I&�I@��~\�;�w��6\��\�\��$mMt\�I6�.jg^\�w\�ɢ&7jy,��\� ��I�\�&�m�\"���+�\��~\0m��Z@	{�a�%�K哔j\�\�1c$���Kl�4�\�~�L,�\�-\"��V\��q���[&6\�\ZM-m�&\�B,�X-8	�ȿm5B\�A\�\0C-�\�[Y/M6��m�\�>v�Q<a�N��\�_\0i4\�m%\�\�\�m�\�[,�\�\�n=6\��۱j�M&\�\�[$�țm4�i\�/�\�\�BH[vGRV\'�&�i�$��\�\0#\0\0\0\0\0\0\0!1 0AP`Q@aq��\�\0?�����ђ~\"&�6���pu��ED5\��.\\(�?�Bfe	�!�,%\�\�\�H\�S�5xB\��sf2�B<6�\Z���#$\�\�(\" �\nߓ� Ø��>\r4��\'\�K��sH\��K2\�\�?~Y�Y������]�;O�\�s2TƢ\��q��\�ʋm�$|\��HSg\0�1��v���bl�\�0D%vb0��_���$��Tu\��D_�\0o�Ed�l�\��\�x�*\\|+\���\"�ULXƲx�\n)̺���e��6�\�\�-\ns O�+���(T�\�\�\�o҈�Q+ޤ\�03�\�\�N�;��D߹���m6G\�ɾ\�m׶\�#}B\�M&\�(ܸ�ib��\�\�u�5\�\�vk<%�Ɵec�\��E�%E���\0\n\\q\�\r\��ɳ\��\�\�O|_X\��\05�0���\�\�	^\��@���1��=\�Y��,\���^ڄs,E���\�N��&дۭQ\�\�0�,`�č�U3<C2j0��X�Љ\��WV��W\n\�pA�\�S9�1�O%\�\�`V\�01q*S��O]z�?<\r\�\'\����L�\�\"upe\�i��kh��� ~bm-�\�T\�\�K�.*U\Z�����z\�?\"�l�*\"�2\�,V\�KϮ\�u\�`Ԥ&&L`� 4\�b�\�\�}g7ER�\0�R�Y[\�դ[}r\�5.\�\�r\����/����˙Y�\�\��$��k�\�˗./�� �Iu�?P\�]qp	d�A\�(�K���\�\�J\��$\�?r\�%j+�\�jm%���b�\�\�&�k��*Zp�\�ܭ�Je�¿eʈ�\�C<�R�sR���Ж>\�n/�먑%sR�no+��\\2�����ߋ�r�J\�Ko8ۓ�v�>\�Xtv\����\�\0\"\0\0\0\0\0\0\0\0! 1AP0Q`a@q�\�\0?�\��J}`\�\��\�-�\�*Zo\��:����J�*6/�\�e���=�$�iS�}�	dw�\�?	wr��f�%a\"�������J�t�)w�6-F�\Z��5\0쌖�R�\�a��,ń�\�}CC�]Q)\�=\�T,\�\�\�r?\�\�U)\�%�f\r��!�A���eR\�\'��4u�/�Q��s^X�;`y�2�T�\\�>b\�y���C8��	�TG\��\�D\�RT\0��\����\�\�F�q�?�\Z0\�\n��s�/��T\�{\�h(\�\�[\�2��A\�¢\��&�0���d�*��\�L4�n�\����\���ˋ�\njl�\�\�.+n5R�>��Z\"1�1z��\�X��\�\�A��/�v\�0\�\��\�\�^=��X9?\���N�`\��z\�\�ۘ\�p�y�\�ί`\��N\�8~By�y3��Z��\��\�J�ϱ�\�]\�Y</�Ba��{��pC��\"\�P\�q���S\��!\��pr\�#�\�`׮*\"�牀0�w�\��8#\�\�\�\�9\\���Dk\�!�\��=��Ň�\��u\�8�\�\�Ԩb�\r0c�.\�d\0�\\2���\�\�4�=~��J�A�O0�;�Cr���\�\�/{\�}q�<��?��\�_\���sf��\�֧�ܹSp\�\�Gn+�s��p%J��\�(�z��\�`�=we�ƥb�J\���eJ�D���6\�N:�\�\�p�P�j&*v�%\"2C�\�]�\��\�IR�N��JJ�m�D%j�r���8\n�{�%J�*T�2��\r�!=Jz�\�\�\0\���\�Q\��8\\�.^+�i���ŝ\�!�84�J!�n՗/-Ͱe4����5���pp�r\�\�\�\�>\n�^\�\�$�\�\���V._\�\�\�ǯ�\�����*Tu�K\�\���g=1\�19�.[_�a��\�qa\��\��_�\�\0(\0\0\0\0\0!1A Qaq��0���\�\����\�\0\0? � � � ���tΙgL�Ιe�Ye�2\�,��Ye�Y\�I,�I$�\�$�I$�K\"9�,\�YDYe�� �\�^Ye� �u{J����܏�\�\�G\�\�\�@1���\'L�$�$�I$�I$�I,� �� \�DY\�:t\�:�3ӝ2\�:�\�xױf\�N;�\�\� �\�g���#\��\�;9��\�Qر�ڌho\�\�\��\�$�d�Id�L�I%�G@�� �gL\�GL�ѿƲ۷���B8\�q��]��4>�w�\�=�\��,�=�5y\��,9\�\�tP�w\��\�z��ѲI$�I$�$�I�\"\"\�\":�t=yz2\�,\���b�\�P.a6 e\�e�^\��/d\��O��{U4��kN9���L\�]���\�\�ѓgT��Id\�2I$\�$�A:dt\"\�Y\�#��\�43yq\�&\����W�\�c\��\0d,\�q\�a1\�\�-\�<��n�c\�\�o��?7z>o\��RI:$��I$�\" ��Dt?��:\�Yg�M\�\�\�~�t\�hX{[�ϿH\\\�b\�sy,(|��,�\�=-�2ɲI:I�$�� ���M�L�\\鐄���Ǐ�\�d!ݒ\�ʤ�\�&G�9�����\0\��%�32I$�DDt �=g��等�p/���\�Dy;@MOR�\�,\�q\��ü�0ŝ�t|R��Fa\�N;�\�2\�,�\�&d�I$�I �\"9�:\�\�Y\�:e�ɝ2Ɂ\rN�v96|n�\�\��\�|�\�\�Z�\��\�����vp�{\��\�?�w͗\��d��?b�Z\�{q\���\�\�\�$�DAt\�Ft\�=$z3\�Y�?�e\'3\� \�\�9)\�!Y���\��\0Oq!|&\��4!��Gk\�W\��g�I2L�I=N�Dt:^GCѽ3�۶]�|/�\'�\0>\��-�\��_(6\0���\�w%\ZS�D�{�M\�\�\�%�<\0\�3�2N��y�d�I$�\�\���\�Q\�1\�#��ޛ\�	ɼ�\�(LE3��ԅ��y-F�\"\0wn�\�9�a>[r5�)�\�~2 �!\�\�\��\�\�uz6tɲI��z�E�s\�GA\�َ�\�\�;[\�ۿ�m\�N\�M�:�Ζ\�?k{y�W�\\��gn�]\�xח\�\�`9Ϸ��`��\����&����\0��\�\�\�&fff΄t�u:�YԳ�\�Q�\�}m�6\�m\�ݾ/\�v��\�;hw�\'7߲~n�}�¼\�t?r~O�bws��܄���\���\�r��\0��z[=2˴��ffȈ�\":�t=\�z�:\�m�ޛo^{\�w�d;\'�\�^m��\�{\�d���Fu\� &��\0�\�\�1���\r\�b\�b6\�\�:e�3\�:3ՒfI\'�dGR:Ј,���\�7�\�m�\�m\�q�C\�p�\�𻶠\�\�\�\�)��\�{�?RFa\��\�n�?�m��\�ֽ\�:,\�\�fd�N�DYg\\��\�\�N\�o]�m�\�m\�\�m�\�,;<\����*C܊�\�e�\��w\�\�\��\�\�\�\�o����.`y��\��\02L\��\":o�\�#\�m�ٶ\�m�\�m�\�mDC��\�\�\Z\�|0>�&72;\�a\�w}\�dh�-�~gGa�\�\�\�vޏ�\�rI������\�FYն\�m\�\�f\�m�\�-\�\0\�G�\�\�=�\�\�\�8�`\�\�Y\�N>`L̑�\�}��gfXe���u�p\�=\�:=2\�\�\�\��\":2\�=�m�ͷ~�M�\�\�\�l�縿\�\�\��a\��~��\0�ݸt8$#�\�S\����C�˷�g�\�*�ye�w\�y�`\�\�\�!\�-�3<Ln\��3֗��\��[},\��,�:�N��m��m�\�m\�\�M�P{��\np|DG��睹g\�HüO��;M���Nt9�\ngOgw\�}�\�?�\�\�\�g\�?\�Oh0\�\�E\�\�$Y?\�|�\��^I;��N�gG�33d1\�:m�6\��\�뾍��\�oU��fF7O\�v\n|{D4v౨o�9�\"k>�\�Dyu\�bÁ�\�}�;\�\��\����Oq\0�x\�p�R6\�_?\�H��X\��,#�˂�Vy:3\�m��3e�\�o\\��\r�eۦY\�m�fm�ޮ\�\�;D\�\�u�>L���p�q�i�<C��\�\��\�u}Hf�\����B�\0O�#\'\�\�V\�ܰ�=��=;\\��n�\�\�/h���e랆d��Yv�Q\�c:\'�z=vf[m�\�e�g \�`�X��\�|���؀�����p�v�Wq}՟\�X�r}�L��\0\��@��\�\�\�?���S���u\�μ\�؄�\��?�\�z�&d�b#�\���L뾇�3љm�\0O狂Mf��\��}�?�Q\�K��p��k\��y��\�1\��\'��\\\�ϲ�\0�p\\C��q�\0\�\�꽏q\�\���\�pm�\0��>\�1}\��\�w�i7�w\�\��e�S33І=%�Ye�6\�}koFm\�\�DB\�\��O\����\�\�\�_q��d�t{\�ܸ\�\'��\�8��2\�>�\0���\�\���?D0��\��|g���d��Ox=\�\�#\�\�#\�\�\�7w�Q\�?@H\�\�q�l��OGfg\'�Gh�\�\�\��m���Ͳ\�pgs\�J0:�\�\�\�\�Q\�\��\0Ř�q^\���A�\�C�v\n�{�ˢf!\�������\�\�!���\�S;=�\�\�=\�Obhg�\�s_-˃�A��y\�6į��Gm\�\�\�g���b\"#ў��g�=e\�\�)Y\�c\�. O\�\��{x����\��q\��,ϫBz�G�\�vd�LG�\�\\\�7��� �v��`{\�\���f��%�{�0\�{�R\�t�\�d�G�X{Y\�x��e�-q:W\�\�%�=Hc��H\�1\�\�m�\�,�\��ٍ\�\�\�e\Z�\�[�C\��a/�s�n\�\�Jψ�#����\0Є\�|�\�9N\�\�G>z	u�i������=׵���p|�\�\�ݣ�\�\�$�\�\'��|��<��xw�\�3�\�\�܁]��\�({�\�y�?ש\�\�\'�\�Ş�Ѷ\�\�m�z��\�,�+�+f�\�݉v@\�\�\��~W\��\0\�n}\�x�X8\�A����\\O��\�S\�1�\�\�lM\�h���P�\\\��q)?ۇ:��\�㜔O+?�pM?�\0�\�\��!3�\Z�_�\�\\Zue\��Ye\�Dt#\�I\�a\�\�m�\�YfYe�r;>o\0\'%�o\"H��.+\�7\�\�\�>g�\�:]�\'�?�\�P\"m\�s\��_H�B\"`u5���$�X�;��&\�pИ_�A!��\�|\��\�\�\�\�P\�t\�h�bz2Y��C3\�\"b@\�=V\�=^��̳8�q\�;x+{�\0\�\�:x�k\�\�1�\\�\�xb6`\�8\�H> \�%��\�\�}\�`�if\�_l\�\�<�b�|�&�����������S�\�3�(\�\Z}�\��@b�\��~<��	�\n�ܴQ_8���\0���ս���\�\��3��^\��%0�\0\�h�x\�~8�\�\'�OU��\�#�\��3�e��[e�c=\0�\�a�>-���!�f�\�ؼu��i�߳x�NvIa\��	xS\�6��xm\��_\�-;�[���ZBn\�\\0�\��s\�\�W\�R\�\Z}\�x]\��!S�%&\r\�w�\�7\�\�\���=��x?\�5\�rՃ|\�\��\�M�\�m\��e��dGC�t\�#�m�����S �����\�p\�]�|�;�Xg\����\0~\�$btn�O0\�}��\0�<>l�\�\�.�q9\�\�ض�{\�\"�q�hEh\�ia�\�\�r���\�kJ�|k�n^a�(}x�o����\0O�\�,�NfNi\�m��\�\�\�,�dDDYe�v\�z沈Km�^�\�\�q\��E��3\���N\\�\0G��\�\�A��?\r�\�\��{�]�\���;\�	ܙ|Y@Du\�\n��譟����\�\�\�\r\�\��{��_\�\�����y�w��\�{+\�<\�\�ųs�~�\�e�}\�\�B�a�Ѷ\�tْe�YmB\�\�\��D8\���\r������\�#7H�K\�HԌ\�C�\�\'q$�d�\�f\��ͮ7�B�94C�?\���9�q��#�\�\�\�g=\�\�y\�\�3ߴ87\�\�$/k\�Oh4s\���*�{N���</\��\�}\r\�\�\�=�a�z\�L�ҝ3�\�,\�Q��\�\�z�p|\���x=�|����\��p�\��P\�\��\�\�l\�k�\�\�\��\�P;�x��\�T?��j}�\��\�L\�\�\�\�?@��gv�@���i-\�r-?.��=L�2XDu:\�l=6\�Kz�2\�,�K��w\�?p���\�#\�\�7`gϛ\�\�Y#{�\����;�\0˄�\�{^<\�k6C�yL��`8<Ɯ)-\�\��|mß0!\��\�,�\��K���ŝw�Ѳ\�&[b\��:dz��\�/C3\�̥���\�l�\�X�I;�ٟ��D�x\��̏r\�F�\0\��\��\07w�@?����frכ��\�\�b\���^�0\�WbL\�\�y~/\'\n�H*`-���\�}-��S\�\�\r�vޛ\�\'��6f\�e�R�����\�#\'\�\�\�]М�d��Eؗ�\'D�Z<\�Di\�{\�}��\�\�a�|\�\�\�d���y��\�9ڼ#�\�3s`�7\�Х�3�Ϝt�]�U\�\r7�Ĕ�@<�� �Ö[��\�?0�-�Ymٙ��ز:\�z3�\�6z=Y�\0K�s[�\'����lf7�\�2\��*\�,:�\0q�84ǟ{&\0>naK�\"�\�>\�\��\�8\�n#���\�ٗ\�_�<\�\��6\��\0�\�(N��p9~����Q\�1\�\�\�v�p��\�Ǩ�#\�=�-,\�{ϼ��z͞�z/Fg�\�N�\�m�6zl�\�E�VR��(��a����]�\�\"@\�[1�\��\�}\�\�~d\�q��\��\�3\��/\��\��\�i՗�	\�{F<��\�������8�9&��\�>\'�\�\�~�\�\n\�7�1 r����\0���;7\�\�N,�\�\�A~\�g�B�v\��<Q���)���>10�^�\�\�RQ\�b\�w-��Y�Y��)t;\����6\�\�.׷�`�o�v\��%\Z\��woŭ�\�?)\�7|���E\�}$\��ch\��nr\�]>P��\����4+�m�����$\�����7i�w�\��f���xO�d(P�=�\��@\�]R<\�|P��\�\����\�a͒�okL{C�-�\�D�%��Bz�\"K:m�=\�fe�R��)K;-�g��\�\�\\$/g2��/�adi�J�\'\�G�4�\�Q\��\0v\�\��\�vN��\��!\n^搀/\�?ܣU�VC~)�0ۿ71\�h�\�\"��y@\�\��i!|!0c�?s��\�N!��\��⚯�\�Ϙ�m��\�m�e���,��D[\��32\�,��R\�R��,��\���h[(XK\�\�>T9�~\�{|\�\���J�\�%��K��\�\�exD�0x\���r\0���\0�؟�I�E�[{�\\_�-�\�\�\'���\�D\��a��-��g�\�=H�a�\�bλo�e��g�e��)JR��\�r9߉�I\�UC��\0�yɄ\�\�C�ŭg\0�^\�-Fs9��[h~�\�\��ra�O��I^�\0�)\��P�v\�G��{L�<BC0\�o]���3\�c�\�\�=7\�\�іfRS2��)JR�/�w%\�\�P\�v\"��\'\��\�.��\�d���M����d�cv�e�\�[<ؾ95t6ލދ\�z2\�/1-��z�fYe�\�b��)JR߫[\�b\�\�����\��\0���\��B3\�	�~m,\�\\��۴��#w�j��v�˰�`9�\\9K�m���\�!�\�m\�\\\�\�g���\�C>���m�\�̲\�,�)JR��-�䍙\�\0�v��?�\�V98]��\�\�ۉս�{\�H�\�ه8ۺ\�Ĺ\"\�<6\�\�Gp?wz��?s\\0\��q\�㌏\�)0�-�\�m��\�\�\�\�#��m\�G]\�B\�,�\�]\nR��)J\�^\�\�3\��T�+�\��ᵝ�\��y�#�9�R\�\�\����A8?�Ã~�;�\�h=\�\�}�t�xۀ\�ݖ\�a�m����-�\��\�'),(5,'wisam','saad al deen','karabuk','38289329',NULL),(6,'kyle','Milo','karabuk','19382374',NULL),(7,'Maria','Halimah','karabuk','1239872',NULL),(8,'Mostafa','Mehmet','karabuk','1298652',NULL),(125,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(127,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(129,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(130,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(131,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(132,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(133,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(134,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(135,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(136,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(137,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(138,'RAMIfwf','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(153,'RAMIewf','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(154,'wefwe','fwefwe','qwdqwe',NULL,NULL),(155,'RAMIwef','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(156,'RAMIwef','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(158,'RAMI111','SAAD AL DEEN111','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(159,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(161,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(184,'RAMI','SAAD AL DfwEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(185,'RAMI','SAAD AL DEEN','100.Yıl MAH. 1030.CAD. Yılmazlar APT. NO: 1/8\nKarabük Merkez, Karabük',NULL,NULL),(186,'roooo','eeeee','ddsdfsdf',NULL,NULL),(188,'jij','djdji','jfiwjefi',NULL,NULL),(189,'Rami','saad','Karabuk','5006855254',NULL),(190,'Mohannad','Saroji','Karabuk','55662285',NULL),(191,'helloAabb','KookoLast','turkey','52200527',NULL);
/*!40000 ALTER TABLE `personal_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-18 19:05:03
