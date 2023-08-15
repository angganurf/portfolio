-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2023 at 09:58 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Figma', 'figma.png', '2023-08-15 03:27:34', '2023-08-15 03:27:34'),
(2, 'Product Hunt', 'producthunt.png', '2023-08-15 03:27:34', '2023-08-15 03:27:34'),
(3, 'Gaga', 'gaga.png', '2023-08-15 03:28:20', '2023-08-15 03:28:20'),
(4, 'Abdz', 'abdz.png', '2023-08-15 03:28:20', '2023-08-15 03:28:20'),
(5, 'Dribble', 'dribble.png', '2023-08-15 03:28:20', '2023-08-15 03:28:20'),
(6, 'Adobe', 'adobe.png', '2023-08-15 03:28:59', '2023-08-15 03:28:59'),
(7, 'Lapa', 'lapa.png', '2023-08-15 03:28:59', '2023-08-15 03:28:59'),
(8, 'One Page Love', 'one-page-love.png', '2023-08-15 03:29:25', '2023-08-15 03:29:25');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(21, '2014_10_12_000000_create_users_table', 1),
(22, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(23, '2019_08_19_000000_create_failed_jobs_table', 1),
(24, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(25, '2023_08_09_135739_create_pages_table', 1),
(26, '2023_08_14_024740_create_works_table', 2),
(27, '2023_08_14_154424_create_companies_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `highlight` enum('Yes','No') NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `contents` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`contents`)),
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` varchar(255) DEFAULT NULL,
  `keywords` varchar(255) DEFAULT NULL,
  `meta_image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `name`, `highlight`, `slug`, `description`, `contents`, `meta_title`, `meta_description`, `keywords`, `meta_image`, `created_at`, `updated_at`) VALUES
(1, 'nft', 'Yes', 'nft', 'My digital arts are also available to collect from various NFT platforms', '{\"announcement\":[{\"banner_link\":\"https://vjy.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flfg.a659ba0a.png\",\"title\":\"Lil Frenz Group\",\"description\":\"A collection of dynamic NFTs. Totally driven by community and living on the Ethereum blockchain. On a mission to build the group of frenz in the metaverse with unique identity.\",\"website_link\":\"https://lilfrenz.group/\",\"twitter_link\":\"https://twitter.com/lilfrenzgroup\",\"instagram_link\":\"https://twitter.com/lilfrenzgroup\"}],\"nfts\":[{\"market\":\"opensea\",\"link\":\"https://opensea.io/assets/ethereum/0x8cebe1ff5cbaae8caf539f82961883ca025387ae/0\",\"name_nft\":\"A tail of Friendship\",\"price\":\"0.01\",\"image\":\"https://vjy.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhop-dog.e122b012.png\",\"collection\":\"\",\"status\":\"SOLD\"},{\"market\":\"opensea\",\"link\":\"https://opensea.io/assets/ethereum/0x8cebe1ff5cbaae8caf539f82961883ca025387ae/1\",\"name_nft\":\"Dancing in the Air\",\"price\":\"FREE\",\"image\":\"https://vjy.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhop-fly.2452b335.png\",\"collection\":\"\",\"status\":\"ENDED\"},{\"market\":\"foundation\",\"link\":\"https://foundation.app/@realvjy/realvjy/1\",\"name_nft\":\"Figish\",\"price\":\"0.50\",\"image\":\"https://vjy.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffigish.0cad617e.png\",\"collection\":\"\",\"status\":\"AUCTION\"}]}', 'NFT', 'My digital arts are also available to collect from various NFT platforms', 'nft, non-fungible token, images, crypto', NULL, '2023-08-10 06:57:04', '2023-08-10 06:57:04'),
(2, 'work', 'No', 'work', 'It has been an absolute pleasure to put my heart and soul into these projects. While you\'re here, browse these projects.', NULL, 'Work', 'It has been an absolute pleasure to put my heart and soul into these projects. While you\'re here, browse these projects.', 'work, hard work, portfolio', NULL, '2023-08-10 06:57:04', '2023-08-10 06:57:04'),
(3, 'timeline', 'No', 'timeline', 'The linear view of some milestones and notable moments that happened so far. And you can always find more information on Twitter and LinkedIn.', NULL, 'Timeline', 'The linear view of some milestones and notable moments that happened so far. And you can always find more information on Twitter and LinkedIn.', 'timeline, angga nurfaisal', NULL, '2023-08-12 13:39:24', '2023-08-12 13:39:24'),
(4, 'about', 'No', 'about', 'Little about me. Also, It’s not that hard to find my contact just search angga nurf.', NULL, 'About', 'Little about me. Also, It’s not that hard to find my contact just search angga nurf.', 'about, angga nurf', NULL, '2023-08-12 13:55:35', '2023-08-12 13:55:35'),
(5, 'story', 'No', 'story', 'Occasionally, I share case study & my process. You can read it here. Most of my posts are published on Medium or as X threads.', NULL, 'Story', 'Occasionally, I share case study & my process. You can read it here. Most of my posts are published on Medium or as X threads.', 'story, angga nurfaisal', NULL, '2023-08-12 13:55:35', '2023-08-12 13:55:35'),
(6, 'supporters', 'No', 'thanks', 'I’m truly grateful to all the wonderful frenz and brands supporting my open source work on Buymecoffee, GitHub Sponsors, Gumroad and other medium', NULL, 'Thanks', 'I’m truly grateful to all the wonderful frenz and brands supporting my open source work on Buymecoffee, GitHub Sponsors, Gumroad and other medium', 'supporters, angga nurfaisal', NULL, '2023-08-12 13:57:17', '2023-08-12 13:57:17'),
(7, 'bookshelf', 'No', 'book', 'Here are some of my favorite books I\'ve read or have on my bookshelf.', NULL, 'Bookshelf', 'Here are some of my favorite books I\'ve read or have on my bookshelf.', 'bookshelf, angga nurfaisal', NULL, '2023-08-12 13:57:17', '2023-08-12 13:57:17'),
(8, 'tech stack', 'No', 'stack', 'The following is my on-the-go app stack for designing, coding, managing, entertaining, and all...', NULL, 'Tech Stack', 'The following is my on-the-go app stack for designing, coding, managing, entertaining, and all...', 'tech stack, angga nurfaisal', NULL, '2023-08-12 13:58:53', '2023-08-12 13:58:53'),
(9, 'photos', 'No', 'https://instagram.com/angganurfaisal', NULL, NULL, 'Photos', 'Instagram', 'photos, instagram, angga nurfaisal', NULL, '2023-08-12 13:58:53', '2023-08-12 13:58:53'),
(10, 'links', 'No', 'lnk', 'Design Wizard ✦ Making design tools and resources✦ Experimenting with web3 & XR ✦ Voyaging in the Metaverse', NULL, 'Links', 'Design Wizard ✦ Making design tools and resources✦ Experimenting with web3 & XR ✦ Voyaging in the Metaverse', 'links, angga nurfaisal', NULL, '2023-08-12 14:00:55', '2023-08-12 14:00:55');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `works`
--

CREATE TABLE `works` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `featured` enum('Yes','No') NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `creation_year` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `works`
--

INSERT INTO `works` (`id`, `title`, `description`, `featured`, `status`, `creation_year`, `thumbnail`, `url`, `created_at`, `updated_at`) VALUES
(1, '3dicons', 'Beautifully Crafted Open-source 3dicons library', 'Yes', 'UPDATE', '2021-Now', 'https://vjy.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3dicons.01da1ba0.png&w=640&q=75', 'https://3dicons.co/?ref=vjyme', '2023-08-14 02:57:52', '2023-08-14 02:57:52'),
(2, 'Ghost Hand Kit', 'Hand Gestures for AR/VR design experience', 'Yes', 'WIP', '2023', 'https://vjy.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fghost-hand-kit.23d9faea.png&w=640&q=75', 'https://vjy.me/hand', '2023-08-14 02:57:52', '2023-08-14 02:57:52'),
(3, 'Noisy Gradients', 'A figma plugin to generate cool grainy gradients', 'Yes', NULL, '2023', 'https://vjy.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnoisy-gradients.f142b4f6.png&w=640&q=75', 'https://tools.metavatar.app/figma', '2023-08-14 03:01:46', '2023-08-14 03:01:46'),
(4, 'V5 UI Kit', 'Open-source Figma UI Kit made for this website', 'Yes', NULL, '2023', 'https://vjy.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv5.fea9827a.png&w=640&q=75', 'https://vjy.me/v5', '2023-08-14 03:01:46', '2023-08-14 03:01:46'),
(5, 'Cool Shapes', 'Cool abstract shapes for visual design', 'Yes', 'WIP', '2023', 'https://vjy.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshapes.95801ae7.png&w=640&q=75', 'https://vjy.me/shapes', '2023-08-14 03:01:46', '2023-08-14 03:01:46'),
(6, 'Project Dots', 'A figma plugin for illustaions. More info soon', 'Yes', 'WIP', 'coming soon', 'https://vjy.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdots.34380c76.png&w=640&q=75', 'https://twitter.com/realvjy/status/1628367876238475267', '2023-08-14 03:01:46', '2023-08-14 03:01:46'),
(7, 'nxtlnk', 'Custom bio link template for nextjs, like - linktree, bio', 'No', NULL, '2022', 'https://vjy.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnxtlnk.1eccaed1.png&w=640&q=75', 'https://nxtlnk.xyz/?ref=vjyme', '2023-08-14 03:04:31', '2023-08-14 03:04:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `works`
--
ALTER TABLE `works`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `works`
--
ALTER TABLE `works`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
