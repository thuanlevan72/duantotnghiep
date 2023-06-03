# [dbo].[__EFMigrationsHistory]
USE [poly_food]
GO

/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

# [dbo].[account]
/****** Object:  Table [dbo].[account]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[account](
	[account_id] [int] IDENTITY(1,1) NOT NULL,
	[user_name] [nvarchar](max) NOT NULL,
	[password] [nvarchar](max) NOT NULL,
	[status] [int] NOT NULL,
	[decentralization_id] [int] NOT NULL,
	[created_at] [datetime2](7) NOT NULL,
	[update_at] [datetime2](7) NOT NULL,
	[avatar] [nvarchar](max) NOT NULL,
	[email] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_account] PRIMARY KEY CLUSTERED 
(
	[account_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[Bookings]
/****** Object:  Table [dbo].[Bookings]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bookings](
	[BookingId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[Price] [float] NOT NULL,
	[NumberOfPeopleBooked] [int] NOT NULL,
	[Note] [nvarchar](max) NOT NULL,
	[Status] [int] NOT NULL,
	[appointmentDate] [datetime2](7) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Bookings] PRIMARY KEY CLUSTERED 
(
	[BookingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[Contacts]
/****** Object:  Table [dbo].[Contacts]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contacts](
	[ContactId] [int] IDENTITY(1,1) NOT NULL,
	[Subject] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Phone] [nvarchar](max) NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Contacts] PRIMARY KEY CLUSTERED 
(
	[ContactId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[decentralization]
/****** Object:  Table [dbo].[decentralization]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[decentralization](
	[decentralization_id] [int] IDENTITY(1,1) NOT NULL,
	[Authority_name] [nvarchar](max) NOT NULL,
	[created_at] [datetime2](7) NOT NULL,
	[update_at] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_decentralization] PRIMARY KEY CLUSTERED 
(
	[decentralization_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[ImagePages]
/****** Object:  Table [dbo].[ImagePages]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ImagePages](
	[ImagePageId] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[Image] [nvarchar](max) NOT NULL,
	[Status] [int] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_ImagePages] PRIMARY KEY CLUSTERED 
(
	[ImagePageId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[Infos]
/****** Object:  Table [dbo].[Infos]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Infos](
	[InfoId] [int] IDENTITY(1,1) NOT NULL,
	[Address1] [nvarchar](max) NOT NULL,
	[Address2] [nvarchar](max) NOT NULL,
	[Phone] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Infos] PRIMARY KEY CLUSTERED 
(
	[InfoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[order]
/****** Object:  Table [dbo].[order]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[order](
	[OrderId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[Status] [int] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
	[OrderStatusId] [int] NOT NULL,
 CONSTRAINT [PK_order] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

# [dbo].[order_detail]
/****** Object:  Table [dbo].[order_detail]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[order_detail](
	[OrderDetailId] [int] IDENTITY(1,1) NOT NULL,
	[OrderId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
	[Price] [float] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_order_detail] PRIMARY KEY CLUSTERED 
(
	[OrderDetailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

# [dbo].[order_status]
/****** Object:  Table [dbo].[order_status]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[order_status](
	[OrderStatusId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_order_status] PRIMARY KEY CLUSTERED 
(
	[OrderStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[payment]
/****** Object:  Table [dbo].[payment]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[payment](
	[PaymentId] [int] IDENTITY(1,1) NOT NULL,
	[BookingId] [int] NOT NULL,
	[PaymentMethod] [nvarchar](max) NOT NULL,
	[OriginalPrice] [float] NOT NULL,
	[ActualPrice] [float] NOT NULL,
	[Status] [int] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_payment] PRIMARY KEY CLUSTERED 
(
	[PaymentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[product]
/****** Object:  Table [dbo].[product]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product](
	[ProductId] [int] IDENTITY(1,1) NOT NULL,
	[ProductTypeId] [int] NOT NULL,
	[NameProduct] [nvarchar](max) NOT NULL,
	[Price] [float] NOT NULL,
	[AvartarImageProduct] [nvarchar](max) NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[Discount] [int] NOT NULL,
	[Status] [int] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_product] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[product_image]
/****** Object:  Table [dbo].[product_image]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product_image](
	[ProductImageId] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[ImageProduct] [nvarchar](max) NOT NULL,
	[ProductId] [int] NOT NULL,
	[Status] [int] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_product_image] PRIMARY KEY CLUSTERED 
(
	[ProductImageId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[product_review]
/****** Object:  Table [dbo].[product_review]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product_review](
	[ProductReviewId] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[ContentRated] [nvarchar](max) NOT NULL,
	[PointEvaluation] [int] NOT NULL,
	[ContentSeen] [nvarchar](max) NOT NULL,
	[Status] [int] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_product_review] PRIMARY KEY CLUSTERED 
(
	[ProductReviewId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[product_type]
/****** Object:  Table [dbo].[product_type]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product_type](
	[ProductTypeId] [int] IDENTITY(1,1) NOT NULL,
	[NameProductType] [nvarchar](max) NOT NULL,
	[ImageTypeProduct] [nvarchar](max) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_product_type] PRIMARY KEY CLUSTERED 
(
	[ProductTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[Reservation_details_service]
/****** Object:  Table [dbo].[Reservation_details_service]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reservation_details_service](
	[ReservationDetailsServiceId] [int] IDENTITY(1,1) NOT NULL,
	[ServiceId] [int] NOT NULL,
	[BookingId] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Reservation_details_service] PRIMARY KEY CLUSTERED 
(
	[ReservationDetailsServiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

# [dbo].[sevicer]
/****** Object:  Table [dbo].[sevicer]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sevicer](
	[ServiceId] [int] IDENTITY(1,1) NOT NULL,
	[ServiceTypeId] [int] NOT NULL,
	[ServiceName] [nvarchar](max) NOT NULL,
	[Price] [float] NOT NULL,
	[ImageService] [nvarchar](max) NOT NULL,
	[Describe] [nvarchar](max) NOT NULL,
	[Status] [int] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_sevicer] PRIMARY KEY CLUSTERED 
(
	[ServiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[sevicer_review]
/****** Object:  Table [dbo].[sevicer_review]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sevicer_review](
	[SevicerReviewId] [int] IDENTITY(1,1) NOT NULL,
	[ServiceId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[ContentRated] [nvarchar](max) NOT NULL,
	[PointEvaluation] [int] NOT NULL,
	[Status] [int] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_sevicer_review] PRIMARY KEY CLUSTERED 
(
	[SevicerReviewId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[sevicer_type]
/****** Object:  Table [dbo].[sevicer_type]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sevicer_type](
	[ServiceTypeId] [int] IDENTITY(1,1) NOT NULL,
	[ServiceTypeName] [nvarchar](max) NOT NULL,
	[ImageTypeService] [nvarchar](max) NOT NULL,
	[Describe] [nvarchar](max) NOT NULL,
	[Status] [int] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_sevicer_type] PRIMARY KEY CLUSTERED 
(
	[ServiceTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[slide]
/****** Object:  Table [dbo].[slide]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[slide](
	[SlideId] [int] IDENTITY(1,1) NOT NULL,
	[SlidesId] [int] NOT NULL,
	[SlideImage] [nvarchar](max) NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_slide] PRIMARY KEY CLUSTERED 
(
	[SlideId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[slides]
/****** Object:  Table [dbo].[slides]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[slides](
	[SlidesId] [int] IDENTITY(1,1) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_slides] PRIMARY KEY CLUSTERED 
(
	[SlidesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

# [dbo].[user]
/****** Object:  Table [dbo].[user]    Script Date: 5/31/2023 7:19:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](max) NOT NULL,
	[Phone] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
	[AccountId] [int] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

# [dbo].[__EFMigrationsHistory]
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230515085740_test1', N'7.0.5')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230524072057_test2', N'7.0.5')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230524072256_test3', N'7.0.5')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230524130726_test4', N'7.0.5')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230525062327_test5', N'7.0.5')
GO

# [dbo].[account]
SET IDENTITY_INSERT [dbo].[account] ON 
INSERT [dbo].[account] ([account_id], [user_name], [password], [status], [decentralization_id], [created_at], [update_at], [avatar], [email]) VALUES (3, N'ganKb', N'123', 1, 2, CAST(N'2023-05-15T08:57:40.9125764' AS DateTime2), CAST(N'2023-05-15T08:57:40.9125903' AS DateTime2), N'', N'')
INSERT [dbo].[account] ([account_id], [user_name], [password], [status], [decentralization_id], [created_at], [update_at], [avatar], [email]) VALUES (1005, N'thuanlvph16873', N'$2a$11$bYmXSUBg65arkFwzvy9zlOnVVGSp2PILZ9Paq3Ylin49n8l5hJhXO', 1, 1, CAST(N'2023-05-24T13:07:25.9384621' AS DateTime2), CAST(N'2023-05-24T13:07:25.9384818' AS DateTime2), N'https://res.cloudinary.com/doedovklj/image/upload/v1684987602/xyz-abc_1317755802_5/25/2023.jpg', N'')
INSERT [dbo].[account] ([account_id], [user_name], [password], [status], [decentralization_id], [created_at], [update_at], [avatar], [email]) VALUES (1007, N'user1', N'$2a$11$FhnZJLzpW8xfeKD5B1d71.aWhRqJ.5SB1Z5iAaG8qVp7pRkvK6hnS', 1, 3, CAST(N'2023-05-25T06:23:27.4395157' AS DateTime2), CAST(N'2023-05-25T06:23:27.4395356' AS DateTime2), N'https://res.cloudinary.com/doedovklj/image/upload/v1684999795/xyz-abc_253382266_5/25/2023.jpg', N'thuanlevan72@gmail.com')
INSERT [dbo].[account] ([account_id], [user_name], [password], [status], [decentralization_id], [created_at], [update_at], [avatar], [email]) VALUES (1008, N'user2', N'$2a$11$2LG6/0MFM41HTCWjbSKpeOLU0JvRd0XIzxdCvOI1RAzLC58mr/6Ja', 1, 3, CAST(N'2023-05-25T06:23:27.4395157' AS DateTime2), CAST(N'2023-05-25T06:23:27.4395356' AS DateTime2), N'https://res.cloudinary.com/doedovklj/image/upload/v1685003402/xyz-abc_1283089937_5/25/2023.jpg', N'thuanlevan72@gmail.com')
INSERT [dbo].[account] ([account_id], [user_name], [password], [status], [decentralization_id], [created_at], [update_at], [avatar], [email]) VALUES (1009, N'user3', N'$2a$11$i0k40SmdPEqqz36zPDZY9O1Zlb5/oCncvnWwQ/Jwhycjvs5UyJS5q', 1, 3, CAST(N'2023-05-25T06:23:27.4395157' AS DateTime2), CAST(N'2023-05-25T06:23:27.4395356' AS DateTime2), N'https://res.cloudinary.com/doedovklj/image/upload/v1685003471/xyz-abc_2145268404_5/25/2023.jpg', N'thuanlevan725@gmail.com')
INSERT [dbo].[account] ([account_id], [user_name], [password], [status], [decentralization_id], [created_at], [update_at], [avatar], [email]) VALUES (1010, N'thuanlv', N'$2a$11$wM68oDazHyq.U341dXafPe/YlQVlRmMFWc1Ld6ZCqGOogKw2DsKsG', 1, 1, CAST(N'2023-05-25T06:23:27.4395157' AS DateTime2), CAST(N'2023-05-25T06:23:27.4395356' AS DateTime2), N'https://res.cloudinary.com/doedovklj/image/upload/v1685437981/xyz-abc_1917101172_5/30/2023.jpg', N'thuanlevan@gmail.com')
SET IDENTITY_INSERT [dbo].[account] OFF
GO

# [dbo].[decentralization]
SET IDENTITY_INSERT [dbo].[decentralization] ON 
INSERT [dbo].[decentralization] ([decentralization_id], [Authority_name], [created_at], [update_at]) VALUES (1, N'Admin', CAST(N'2023-05-15T08:57:40.9126041' AS DateTime2), CAST(N'2023-05-15T08:57:40.9126114' AS DateTime2))
INSERT [dbo].[decentralization] ([decentralization_id], [Authority_name], [created_at], [update_at]) VALUES (2, N'Staff', CAST(N'2023-05-15T08:57:40.9126041' AS DateTime2), CAST(N'2023-05-15T08:57:40.9126114' AS DateTime2))
INSERT [dbo].[decentralization] ([decentralization_id], [Authority_name], [created_at], [update_at]) VALUES (3, N'Client', CAST(N'2023-05-15T08:57:40.9126041' AS DateTime2), CAST(N'2023-05-15T08:57:40.9126114' AS DateTime2))
SET IDENTITY_INSERT [dbo].[decentralization] OFF
GO

# [dbo].[user]
SET IDENTITY_INSERT [dbo].[user] ON 
INSERT [dbo].[user] ([UserId], [UserName], [Phone], [Email], [Address], [AccountId], [CreatedAt], [UpdatedAt]) VALUES (2, N'', N'', N'thuanlevan72@gmail.com', N'', 1007, CAST(N'2023-05-25T06:23:27.4395661' AS DateTime2), CAST(N'2023-05-25T06:23:27.4395762' AS DateTime2))
INSERT [dbo].[user] ([UserId], [UserName], [Phone], [Email], [Address], [AccountId], [CreatedAt], [UpdatedAt]) VALUES (3, N'', N'', N'thuanlevan72@gmail.com', N'', 1008, CAST(N'2023-05-25T06:23:27.4395661' AS DateTime2), CAST(N'2023-05-25T06:23:27.4395762' AS DateTime2))
INSERT [dbo].[user] ([UserId], [UserName], [Phone], [Email], [Address], [AccountId], [CreatedAt], [UpdatedAt]) VALUES (4, N'', N'', N'thuanlevan725@gmail.com', N'', 1009, CAST(N'2023-05-25T06:23:27.4395661' AS DateTime2), CAST(N'2023-05-25T06:23:27.4395762' AS DateTime2))
INSERT [dbo].[user] ([UserId], [UserName], [Phone], [Email], [Address], [AccountId], [CreatedAt], [UpdatedAt]) VALUES (5, N'', N'', N'thuanlevan@gmail.com', N'', 1010, CAST(N'2023-05-25T06:23:27.4395661' AS DateTime2), CAST(N'2023-05-25T06:23:27.4395762' AS DateTime2))
SET IDENTITY_INSERT [dbo].[user] OFF
GO

# [DF__account__created__681373AD]
ALTER TABLE [dbo].[account] ADD  DEFAULT ('2023-05-25T06:23:27.4395157Z') FOR [created_at]
GO

# [DF__account__update___671F4F74]
ALTER TABLE [dbo].[account] ADD  DEFAULT ('2023-05-25T06:23:27.4395356Z') FOR [update_at]
GO

# [DF__account__avatar__06CD04F7]
ALTER TABLE [dbo].[account] ADD  DEFAULT (N'') FOR [avatar]
GO

# [DF__account__email__690797E6]
ALTER TABLE [dbo].[account] ADD  DEFAULT (N'') FOR [email]
GO

# [DF__Bookings__Create__662B2B3B]
ALTER TABLE [dbo].[Bookings] ADD  DEFAULT ('2023-05-25T06:23:27.4396970Z') FOR [CreatedAt]
GO

# [DF__Bookings__Update__65370702]
ALTER TABLE [dbo].[Bookings] ADD  DEFAULT ('2023-05-25T06:23:27.4397083Z') FOR [UpdatedAt]
GO

# [DF__Contacts__Create__6442E2C9]
ALTER TABLE [dbo].[Contacts] ADD  DEFAULT ('2023-05-25T06:23:27.4397384Z') FOR [CreatedAt]
GO

# [DF__Contacts__Update__634EBE90]
ALTER TABLE [dbo].[Contacts] ADD  DEFAULT ('2023-05-25T06:23:27.4397491Z') FOR [UpdatedAt]
GO

# [DF__decentral__creat__625A9A57]
ALTER TABLE [dbo].[decentralization] ADD  DEFAULT ('2023-05-25T06:23:27.4395463Z') FOR [created_at]
GO

# [DF__decentral__updat__6166761E]
ALTER TABLE [dbo].[decentralization] ADD  DEFAULT ('2023-05-25T06:23:27.4395548Z') FOR [update_at]
GO

# [DF__ImagePage__Creat__607251E5]
ALTER TABLE [dbo].[ImagePages] ADD  DEFAULT ('2023-05-25T06:23:27.4397969Z') FOR [CreatedAt]
GO

# [DF__ImagePage__Updat__5F7E2DAC]
ALTER TABLE [dbo].[ImagePages] ADD  DEFAULT ('2023-05-25T06:23:27.4398050Z') FOR [UpdatedAt]
GO

# [DF__Infos__CreatedAt__5E8A0973]
ALTER TABLE [dbo].[Infos] ADD  DEFAULT ('2023-05-25T06:23:27.4397585Z') FOR [CreatedAt]
GO

# [DF__Infos__UpdatedAt__5D95E53A]
ALTER TABLE [dbo].[Infos] ADD  DEFAULT ('2023-05-25T06:23:27.4397693Z') FOR [UpdatedAt]
GO

# [DF__payment__Created__5CA1C101]
ALTER TABLE [dbo].[payment] ADD  DEFAULT ('2023-05-25T06:23:27.4397176Z') FOR [CreatedAt]
GO

# [DF__payment__Updated__5BAD9CC8]
ALTER TABLE [dbo].[payment] ADD  DEFAULT ('2023-05-25T06:23:27.4397287Z') FOR [UpdatedAt]
GO

# [DF__product__Created__5AB9788F]
ALTER TABLE [dbo].[product] ADD  DEFAULT ('2023-05-25T06:23:27.4396088Z') FOR [CreatedAt]
GO

# [DF__product__Updated__59C55456]
ALTER TABLE [dbo].[product] ADD  DEFAULT ('2023-05-25T06:23:27.4396181Z') FOR [UpdatedAt]
GO

# [DF__product_i__Creat__58D1301D]
ALTER TABLE [dbo].[product_image] ADD  DEFAULT ('2023-05-25T06:23:27.4396300Z') FOR [CreatedAt]
GO

# [DF__product_i__Updat__57DD0BE4]
ALTER TABLE [dbo].[product_image] ADD  DEFAULT ('2023-05-25T06:23:27.4396389Z') FOR [UpdatedAt]
GO

# [DF__product_r__Creat__56E8E7AB]
ALTER TABLE [dbo].[product_review] ADD  DEFAULT ('2023-05-25T06:23:27.4396508Z') FOR [CreatedAt]
GO

# [DF__product_r__Updat__55F4C372]
ALTER TABLE [dbo].[product_review] ADD  DEFAULT ('2023-05-25T06:23:27.4396608Z') FOR [UpdatedAt]
GO

# [DF__product_t__Creat__55009F39]
ALTER TABLE [dbo].[product_type] ADD  DEFAULT ('2023-05-25T06:23:27.4395884Z') FOR [CreatedAt]
GO

# [DF__product_t__Updat__540C7B00]
ALTER TABLE [dbo].[product_type] ADD  DEFAULT ('2023-05-25T06:23:27.4395967Z') FOR [UpdatedAt]
GO

# [DF__Reservati__Creat__531856C7]
ALTER TABLE [dbo].[Reservation_details_service] ADD  DEFAULT ('2023-05-25T06:23:27.4396747Z') FOR [CreatedAt]
GO

# [DF__Reservati__Updat__5224328E]
ALTER TABLE [dbo].[Reservation_details_service] ADD  DEFAULT ('2023-05-25T06:23:27.4396841Z') FOR [UpdatedAt]
GO

# [DF__slides__CreatedA__51300E55]
ALTER TABLE [dbo].[slides] ADD  DEFAULT ('2023-05-25T06:23:27.4397776Z') FOR [CreatedAt]
GO

# [DF__slides__UpdatedA__503BEA1C]
ALTER TABLE [dbo].[slides] ADD  DEFAULT ('2023-05-25T06:23:27.4397855Z') FOR [UpdatedAt]
GO

# [DF__user__CreatedAt__4F47C5E3]
ALTER TABLE [dbo].[user] ADD  DEFAULT ('2023-05-25T06:23:27.4395661Z') FOR [CreatedAt]
GO

# [DF__user__UpdatedAt__4E53A1AA]
ALTER TABLE [dbo].[user] ADD  DEFAULT ('2023-05-25T06:23:27.4395762Z') FOR [UpdatedAt]
GO

# [FK_account_decentralization_decentralization_id]
ALTER TABLE [dbo].[account]  WITH CHECK ADD  CONSTRAINT [FK_account_decentralization_decentralization_id] FOREIGN KEY([decentralization_id])
REFERENCES [dbo].[decentralization] ([decentralization_id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[account] CHECK CONSTRAINT [FK_account_decentralization_decentralization_id]
GO

# [FK_Bookings_user_UserId]
ALTER TABLE [dbo].[Bookings]  WITH CHECK ADD  CONSTRAINT [FK_Bookings_user_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[user] ([UserId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Bookings] CHECK CONSTRAINT [FK_Bookings_user_UserId]
GO

# [FK_order_order_status_OrderStatusId]
ALTER TABLE [dbo].[order]  WITH CHECK ADD  CONSTRAINT [FK_order_order_status_OrderStatusId] FOREIGN KEY([OrderStatusId])
REFERENCES [dbo].[order_status] ([OrderStatusId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[order] CHECK CONSTRAINT [FK_order_order_status_OrderStatusId]
GO

# [FK_order_user_UserId]
ALTER TABLE [dbo].[order]  WITH CHECK ADD  CONSTRAINT [FK_order_user_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[user] ([UserId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[order] CHECK CONSTRAINT [FK_order_user_UserId]
GO

# [FK_order_detail_order_OrderId]
ALTER TABLE [dbo].[order_detail]  WITH CHECK ADD  CONSTRAINT [FK_order_detail_order_OrderId] FOREIGN KEY([OrderId])
REFERENCES [dbo].[order] ([OrderId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[order_detail] CHECK CONSTRAINT [FK_order_detail_order_OrderId]
GO

# [FK_order_detail_product_ProductId]
ALTER TABLE [dbo].[order_detail]  WITH CHECK ADD  CONSTRAINT [FK_order_detail_product_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[product] ([ProductId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[order_detail] CHECK CONSTRAINT [FK_order_detail_product_ProductId]
GO

# [FK_payment_Bookings_BookingId]
ALTER TABLE [dbo].[payment]  WITH CHECK ADD  CONSTRAINT [FK_payment_Bookings_BookingId] FOREIGN KEY([BookingId])
REFERENCES [dbo].[Bookings] ([BookingId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[payment] CHECK CONSTRAINT [FK_payment_Bookings_BookingId]
GO

# [FK_product_product_type_ProductTypeId]
ALTER TABLE [dbo].[product]  WITH CHECK ADD  CONSTRAINT [FK_product_product_type_ProductTypeId] FOREIGN KEY([ProductTypeId])
REFERENCES [dbo].[product_type] ([ProductTypeId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product] CHECK CONSTRAINT [FK_product_product_type_ProductTypeId]
GO

# [FK_product_image_product_ProductId]
ALTER TABLE [dbo].[product_image]  WITH CHECK ADD  CONSTRAINT [FK_product_image_product_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[product] ([ProductId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product_image] CHECK CONSTRAINT [FK_product_image_product_ProductId]
GO

# [FK_product_review_product_ProductId]
ALTER TABLE [dbo].[product_review]  WITH CHECK ADD  CONSTRAINT [FK_product_review_product_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[product] ([ProductId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product_review] CHECK CONSTRAINT [FK_product_review_product_ProductId]
GO

# [FK_product_review_user_UserId]
ALTER TABLE [dbo].[product_review]  WITH CHECK ADD  CONSTRAINT [FK_product_review_user_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[user] ([UserId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product_review] CHECK CONSTRAINT [FK_product_review_user_UserId]
GO

# [FK_Reservation_details_service_Bookings_BookingId]
ALTER TABLE [dbo].[Reservation_details_service]  WITH CHECK ADD  CONSTRAINT [FK_Reservation_details_service_Bookings_BookingId] FOREIGN KEY([BookingId])
REFERENCES [dbo].[Bookings] ([BookingId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Reservation_details_service] CHECK CONSTRAINT [FK_Reservation_details_service_Bookings_BookingId]
GO

# [FK_Reservation_details_service_sevicer_ServiceId]
ALTER TABLE [dbo].[Reservation_details_service]  WITH CHECK ADD  CONSTRAINT [FK_Reservation_details_service_sevicer_ServiceId] FOREIGN KEY([ServiceId])
REFERENCES [dbo].[sevicer] ([ServiceId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Reservation_details_service] CHECK CONSTRAINT [FK_Reservation_details_service_sevicer_ServiceId]
GO

# [FK_sevicer_sevicer_type_ServiceTypeId]
ALTER TABLE [dbo].[sevicer]  WITH CHECK ADD  CONSTRAINT [FK_sevicer_sevicer_type_ServiceTypeId] FOREIGN KEY([ServiceTypeId])
REFERENCES [dbo].[sevicer_type] ([ServiceTypeId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[sevicer] CHECK CONSTRAINT [FK_sevicer_sevicer_type_ServiceTypeId]
GO

# [FK_sevicer_review_sevicer_ServiceId]
ALTER TABLE [dbo].[sevicer_review]  WITH CHECK ADD  CONSTRAINT [FK_sevicer_review_sevicer_ServiceId] FOREIGN KEY([ServiceId])
REFERENCES [dbo].[sevicer] ([ServiceId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[sevicer_review] CHECK CONSTRAINT [FK_sevicer_review_sevicer_ServiceId]
GO

# [FK_sevicer_review_user_UserId]
ALTER TABLE [dbo].[sevicer_review]  WITH CHECK ADD  CONSTRAINT [FK_sevicer_review_user_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[user] ([UserId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[sevicer_review] CHECK CONSTRAINT [FK_sevicer_review_user_UserId]
GO

# [FK_slide_slides_SlidesId]
ALTER TABLE [dbo].[slide]  WITH CHECK ADD  CONSTRAINT [FK_slide_slides_SlidesId] FOREIGN KEY([SlidesId])
REFERENCES [dbo].[slides] ([SlidesId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[slide] CHECK CONSTRAINT [FK_slide_slides_SlidesId]
GO

# [FK_user_account_AccountId]
ALTER TABLE [dbo].[user]  WITH CHECK ADD  CONSTRAINT [FK_user_account_AccountId] FOREIGN KEY([AccountId])
REFERENCES [dbo].[account] ([account_id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[user] CHECK CONSTRAINT [FK_user_account_AccountId]
GO
