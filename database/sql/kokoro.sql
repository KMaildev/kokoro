-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 03, 2023 at 05:09 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kokoro`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int(10) UNSIGNED NOT NULL,
  `description_eng` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_jp` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gallery` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `description_eng`, `description_jp`, `gallery`, `created_at`, `updated_at`) VALUES
(1, 'Kokoro Japanese Language Schoolကနေ ဖွင့်လှစ်ခဲ့တဲ့ N5 N4 Class Batch-2ကတော့ အောင်မြင်စွာ ပြီးဆုံးသွားခဲ့ပါပြီ။ \r\n“皆さん、おめでとうございます🎉”\r\nဂျပန်ရောက်ဖို့ ပထမခြေလှမ်းဖြစ်တဲ့ N5 N4 classကို အောင်မြင်စွာသင်ယူပြီးဆုံးသွားပါပြီ။ နောက်ထပ်ခြေလှမ်းတစ်ခုဖြစ်တဲ့ Tokutei အတန်းတွေကိုတက်ရောက်ပြီး အောင်လက်မှတ်လေးတွေကို ယူခဲ့ပေးကြနော်။ အင်တာဗျူးတွေနဲ့ စောင့်နေမယ်နော် ကလေးတို့ရေ………', 'Kokoro Japanese Language Schoolကနေ ဖွင့်လှစ်ခဲ့တဲ့ N5 N4 Class Batch-2ကတော့ အောင်မြင်စွာ ပြီးဆုံးသွားခဲ့ပါပြီ။ \r\n“皆さん、おめでとうございます🎉”\r\nဂျပန်ရောက်ဖို့ ပထမခြေလှမ်းဖြစ်တဲ့ N5 N4 classကို အောင်မြင်စွာသင်ယူပြီးဆုံးသွားပါပြီ။ နောက်ထပ်ခြေလှမ်းတစ်ခုဖြစ်တဲ့ Tokutei အတန်းတွေကိုတက်ရောက်ပြီး အောင်လက်မှတ်လေးတွေကို ယူခဲ့ပေးကြနော်။ အင်တာဗျူးတွေနဲ့ စောင့်နေမယ်နော် ကလေးတို့ရေ………', 'https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/339138862_6005143469603787_1061801938615897905_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xgIf74eiyR4AX8VyHO-&_nc_ht=scontent.frgn4-1.fna&oh=00_AfCa_RNIKQp61aMYiZMAtNgK0OTZ_D8BBxlsgLy73TP9QA&oe=642F27C4,https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/339116671_598512272179388_4469294402234703334_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=f8kScRGh168AX8uPsCn&_nc_oc=AQkE1ONaCRxBYm5XfFoSUtua5I06RIdsffG5LpbbvEPH3NFGGrMwDHrsQt3vPkANkVg&_nc_ht=scontent.frgn4-1.fna&oh=00_AfBiKPppkZbl-vWZbbW-7Ifn8aRIrditD93meSdFrIauUg&oe=642DD99E,https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/339120134_175392502008422_3788202289201110528_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3q7RtlW4HrsAX85zJia&_nc_ht=scontent.frgn4-1.fna&oh=00_AfBz3G3-A7S5qNkveqMhBIiSJ6konfT3j-zBhdqdKZE9og&oe=642EAEE3,https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/337531244_752193913155417_157987062632525345_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=YrdV91yYfrwAX_l8f4P&_nc_ht=scontent.frgn4-1.fna&oh=00_AfC2svVV4CLKGc5s29DMWud8T8JbCg2Nsa4DRqdJHh-K2A&oe=642E7F48', NULL, NULL),
(2, 'Kokoro Japanese Language Schoolကနေ ဖွင့်လှစ်ခဲ့တဲ့ N5 N4 Class Batch-2ကတော့ အောင်မြင်စွာ ပြီးဆုံးသွားခဲ့ပါပြီ။ \r\n“皆さん、おめでとうございます🎉”\r\nဂျပန်ရောက်ဖို့ ပထမခြေလှမ်းဖြစ်တဲ့ N5 N4 classကို အောင်မြင်စွာသင်ယူပြီးဆုံးသွားပါပြီ။ နောက်ထပ်ခြေလှမ်းတစ်ခုဖြစ်တဲ့ Tokutei အတန်းတွေကိုတက်ရောက်ပြီး အောင်လက်မှတ်လေးတွေကို ယူခဲ့ပေးကြနော်။ အင်တာဗျူးတွေနဲ့ စောင့်နေမယ်နော် ကလေးတို့ရေ………', 'Kokoro Japanese Language Schoolကနေ ဖွင့်လှစ်ခဲ့တဲ့ N5 N4 Class Batch-2ကတော့ အောင်မြင်စွာ ပြီးဆုံးသွားခဲ့ပါပြီ။ \r\n“皆さん、おめでとうございます🎉”\r\nဂျပန်ရောက်ဖို့ ပထမခြေလှမ်းဖြစ်တဲ့ N5 N4 classကို အောင်မြင်စွာသင်ယူပြီးဆုံးသွားပါပြီ။ နောက်ထပ်ခြေလှမ်းတစ်ခုဖြစ်တဲ့ Tokutei အတန်းတွေကိုတက်ရောက်ပြီး အောင်လက်မှတ်လေးတွေကို ယူခဲ့ပေးကြနော်။ အင်တာဗျူးတွေနဲ့ စောင့်နေမယ်နော် ကလေးတို့ရေ………', 'https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/339138862_6005143469603787_1061801938615897905_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xgIf74eiyR4AX8VyHO-&_nc_ht=scontent.frgn4-1.fna&oh=00_AfCa_RNIKQp61aMYiZMAtNgK0OTZ_D8BBxlsgLy73TP9QA&oe=642F27C4,https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/339116671_598512272179388_4469294402234703334_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=f8kScRGh168AX8uPsCn&_nc_oc=AQkE1ONaCRxBYm5XfFoSUtua5I06RIdsffG5LpbbvEPH3NFGGrMwDHrsQt3vPkANkVg&_nc_ht=scontent.frgn4-1.fna&oh=00_AfBiKPppkZbl-vWZbbW-7Ifn8aRIrditD93meSdFrIauUg&oe=642DD99E,https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/339120134_175392502008422_3788202289201110528_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3q7RtlW4HrsAX85zJia&_nc_ht=scontent.frgn4-1.fna&oh=00_AfBz3G3-A7S5qNkveqMhBIiSJ6konfT3j-zBhdqdKZE9og&oe=642EAEE3,https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/337531244_752193913155417_157987062632525345_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=YrdV91yYfrwAX_l8f4P&_nc_ht=scontent.frgn4-1.fna&oh=00_AfC2svVV4CLKGc5s29DMWud8T8JbCg2Nsa4DRqdJHh-K2A&oe=642E7F48', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message_date` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `subject`, `message`, `message_date`, `created_at`, `updated_at`) VALUES
(1, 'Mg Mg', 'mgmg@gmail.com', 'Hello', 'Hello', '2023-04-02', '2023-04-02 05:02:18', '2023-04-02 05:02:18');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(10) UNSIGNED NOT NULL,
  `job_title_eng` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_title_jp` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_eng` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_jp` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `job_title_eng`, `job_title_jp`, `description_eng`, `description_jp`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'Tokutei (ဘိုးဘွားစောင့်ရှောက်ရေး)အလုပ်', 'Tokutei (ဘိုးဘွားစောင့်ရှောက်ရေး)အလုပ်', 'Tokutei (ဘိုးဘွားစောင့်ရှောက်ရေး)အလုပ်ခေါ်စာလေးရရှိထားပါတယ်\r\nတည်နေရာ - ခရိုင်\r\nအခြေခံလစာ - ၁၅၀,၀၀၀ ယန်း\r\nအိမ်လခခံစားခွင့် - ၁၅,၀၀၀ယန်း\r\nရက်မှန်ကြေး - ၁၀,၀၀၀ယန််း\r\nညဆိုင်းခံစားခွင့် - ၇,၀၀၀ ယန််း\r\nဖြတ်တောက်ပြီး\r\nကျန်ငွေ            - ၁၁၇,၄၀၇ယန်း (ညဆိုင်းခံစားခွင့်မပါ)\r\nbonus        -     ရှိ (၁နှစ်၂ကြိမ်)\r\nမှတ်ချက် သက်ကြီးရွယ်အိုစောက်ရှောက်ရေးတွင်အတွေ့အကြုံရှိသူ/သူနာပြုအကူသင်တန်းတက်ရောက်နေသူ/ပြီးဆုံးသူဖြစ်ရမယ်\r\nစာရင်းပေးသွင်းရန်link \r\n<br><br>\r\nhttps://docs.google.com/forms/d/e/1FAIpQLScwEMXBJMBLtHou_drWIiOrRZZBxiTcWwjX4w0b7u0ZucIdvg/viewform?fbclid=IwAR3PRAk3hMmkPvnvUei7BBBjHn-XY474Upv_xUVIW8k6BVQ0LQYIYr9wyQg', 'Tokutei (ဘိုးဘွားစောင့်ရှောက်ရေး)အလုပ်ခေါ်စာလေးရရှိထားပါတယ်\r\nတည်နေရာ - ခရိုင်\r\nအခြေခံလစာ - ၁၅၀,၀၀၀ ယန်း\r\nအိမ်လခခံစားခွင့် - ၁၅,၀၀၀ယန်း\r\nရက်မှန်ကြေး - ၁၀,၀၀၀ယန််း\r\nညဆိုင်းခံစားခွင့် - ၇,၀၀၀ ယန််း\r\nဖြတ်တောက်ပြီး\r\nကျန်ငွေ            - ၁၁၇,၄၀၇ယန်း (ညဆိုင်းခံစားခွင့်မပါ)\r\nbonus        -     ရှိ (၁နှစ်၂ကြိမ်)\r\nမှတ်ချက် သက်ကြီးရွယ်အိုစောက်ရှောက်ရေးတွင်အတွေ့အကြုံရှိသူ/သူနာပြုအကူသင်တန်းတက်ရောက်နေသူ/ပြီးဆုံးသူဖြစ်ရမယ်\r\nစာရင်းပေးသွင်းရန်link \r\n<br><br>\r\nhttps://docs.google.com/forms/d/e/1FAIpQLScwEMXBJMBLtHou_drWIiOrRZZBxiTcWwjX4w0b7u0ZucIdvg/viewform?fbclid=IwAR3PRAk3hMmkPvnvUei7BBBjHn-XY474Upv_xUVIW8k6BVQ0LQYIYr9wyQg', 'https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/339302539_1161137041227693_2748006095802675652_n.jpg?stp=dst-jpg_s600x600&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vZPcHRLaqvMAX-R6w1n&_nc_oc=AQlvQnGYdHTTe3vSmqEa4Odap8EMp9Tksb1c0UJCT-52WXfSg-lXCmrf9cvUS_YSTCA&_nc_ht=scontent.frgn4-1.fna&oh=00_AfBfzrjardfdXr97fiqMFOyVCpQqIZNlvP9kw7-Ym7L_nw&oe=642D8FE4', NULL, NULL),
(2, 'B.E (Civil) ', 'B.E (Civil) ', 'B.E (Civil) ဖြင့်ဘွဲ့ရရှိထားသောညီငယ် များအတွက်သတင်းကောင်း! Work Visa ဖြင့်Urgent အလုပ်ခေါ်ထားပါတယ်နော်\r\nအလုပ်တည်နေရာကလဲ Tokyo မြို့ကြီးနဲ့နီးတဲ့ Yamanashi ခရိုင်မှာလုပ်ရမှာပါ။ Japan Company ကြီးတိုက်ရိုက်အမြဲတန်းဝန်ထမ်းအဖြစ်ခန့်မှာဖြစ်လို့အရမ်းကောင်းမွန်တဲ့အခွင့်ရေးပါနော်\r\n1. လုပ်ငန်းအမျိုးအစား  - ဆောက်လုပ်ရေးလုပ်ငန်း\r\n2. လုပ်ငန်းအမည် - တံတားများနှင့် ဥမင်များကို ဆိုက်ရောက် စီမံခန့်ခွဲခြင်း။\r\n3. လုပ်ငန်းအကြောင်းအရာ - ဆောက်လုပ်ရေး site အတွင်းလမ်းညွှန်ခြင်း၊ စီမံခြင်း\r\n4. ခေါ်ယူမည့်ဦးရေ - ကျား ၂ ဦး\r\n1. အခြေခံလစာ - ယန်း ၂၅ သောင်း\r\n5. ဂျပန်စာအရည်အချင်း - JLPT or Nat Test N3 level နှင့်အထက်\r\n6. လိုအပ်သောအရည်အချင်း - Construction & Civil Engineering /B.E(Civil)ဖြင့်ဘွဲ့ရရှိထားသူ\r\n7. အသက် - ၂၅နှစ်အောက်\r\n8. လုပ်ငန်းတည်နေရာ - Kofu City,Yamanashi Prefecture\r\n9. အချိန်ပို - ရှိ \r\n10. ပိတ်ရက် - 1 ပတ် 1 ရက် (တနဂ်နွေ)\r\n***လစာတိုးခြင်း၊ အပိုဆုကြေး၊ အလုပ်ထွက်ချိန်ဆုငွေများခံစားခွင့်ရှိသည်။***\r\nလျှောက်ထားရန်လိုအပ်သည်များ\r\n• B.Tech/B.E ဘွဲ့လက်မှတ်\r\n• တက္ကသိုလ်5နှစ်/6နှစ်စာအမှတ်စာရင်း\r\n• ဆယ်တန်းအောင်လက်မှတ်/အမှတ်စာရင်း\r\n• JLPT or Nat Test N3 levelနှင့်အထက်အောင်လက်မှတ်\r\n• မှတ်ပုံတင်/အိမ်ထောင်စုစာရင်း\r\nအထက်ပါအချက်လက်များပြည့်စုံပြီးကိုက်ညီသူများအောက်တွင်ပေးထားသော Link တွင်ဝင်ရောက်စာရင်းသွင်း၍ဖြစ်စေဖုန်းဖြင့်ဆက်သွယ်၍ဖြစ်စေလျှောက်ထားနိုင်ပါသည်။', 'B.E (Civil) ဖြင့်ဘွဲ့ရရှိထားသောညီငယ် များအတွက်သတင်းကောင်း! Work Visa ဖြင့်Urgent အလုပ်ခေါ်ထားပါတယ်နော်\r\nအလုပ်တည်နေရာကလဲ Tokyo မြို့ကြီးနဲ့နီးတဲ့ Yamanashi ခရိုင်မှာလုပ်ရမှာပါ။ Japan Company ကြီးတိုက်ရိုက်အမြဲတန်းဝန်ထမ်းအဖြစ်ခန့်မှာဖြစ်လို့အရမ်းကောင်းမွန်တဲ့အခွင့်ရေးပါနော်\r\n1. လုပ်ငန်းအမျိုးအစား  - ဆောက်လုပ်ရေးလုပ်ငန်း\r\n2. လုပ်ငန်းအမည် - တံတားများနှင့် ဥမင်များကို ဆိုက်ရောက် စီမံခန့်ခွဲခြင်း။\r\n3. လုပ်ငန်းအကြောင်းအရာ - ဆောက်လုပ်ရေး site အတွင်းလမ်းညွှန်ခြင်း၊ စီမံခြင်း\r\n4. ခေါ်ယူမည့်ဦးရေ - ကျား ၂ ဦး\r\n1. အခြေခံလစာ - ယန်း ၂၅ သောင်း\r\n5. ဂျပန်စာအရည်အချင်း - JLPT or Nat Test N3 level နှင့်အထက်\r\n6. လိုအပ်သောအရည်အချင်း - Construction & Civil Engineering /B.E(Civil)ဖြင့်ဘွဲ့ရရှိထားသူ\r\n7. အသက် - ၂၅နှစ်အောက်\r\n8. လုပ်ငန်းတည်နေရာ - Kofu City,Yamanashi Prefecture\r\n9. အချိန်ပို - ရှိ \r\n10. ပိတ်ရက် - 1 ပတ် 1 ရက် (တနဂ်နွေ)\r\n***လစာတိုးခြင်း၊ အပိုဆုကြေး၊ အလုပ်ထွက်ချိန်ဆုငွေများခံစားခွင့်ရှိသည်။***\r\nလျှောက်ထားရန်လိုအပ်သည်များ\r\n• B.Tech/B.E ဘွဲ့လက်မှတ်\r\n• တက္ကသိုလ်5နှစ်/6နှစ်စာအမှတ်စာရင်း\r\n• ဆယ်တန်းအောင်လက်မှတ်/အမှတ်စာရင်း\r\n• JLPT or Nat Test N3 levelနှင့်အထက်အောင်လက်မှတ်\r\n• မှတ်ပုံတင်/အိမ်ထောင်စုစာရင်း\r\nအထက်ပါအချက်လက်များပြည့်စုံပြီးကိုက်ညီသူများအောက်တွင်ပေးထားသော Link တွင်ဝင်ရောက်စာရင်းသွင်း၍ဖြစ်စေဖုန်းဖြင့်ဆက်သွယ်၍ဖြစ်စေလျှောက်ထားနိုင်ပါသည်။', 'https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/338577709_621861839270268_8083520094934200826_n.jpg?stp=dst-jpg_s600x600&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rlb3oFw4bXAAX_Lj_Uv&_nc_ht=scontent.frgn4-1.fna&oh=00_AfCwUUSstP--2gOP1ZrIw5jfQApDGh8JR1tX1RjaWcPpgw&oe=642E2C64', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_04_02_112843_create_contacts_table', 1),
(6, '2023_04_02_141053_create_activities_table', 2),
(7, '2023_04_02_154923_create_jobs_table', 3),
(8, '2023_04_02_163244_create_teams_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `position`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'U Mg Mg', 'MD', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOkxkw4_Jroi5sHXGeyoLXKvEQdHcwNd6kuIGA-fkwbdUfh76NOlI9V_9Bi5Y0RrnMkQ&usqp=CAU', NULL, NULL),
(2, 'U Aung Aung', 'Manager', 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=913', NULL, NULL),
(3, 'U Aung Kyaw', 'Office Manager', 'https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg', NULL, NULL),
(4, 'Ko Kyaw Kyaw', 'Office Staff', 'https://profile-images.xing.com/images/dc617ff7a9c213794842184e85876974-1/patrick-j%C3%A4ger.1024x1024.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
