﻿// <auto-generated />
using System;
using LionUp.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace LionUp.Migrations
{
    [DbContext(typeof(LionUpContext))]
    partial class LionUpContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("LionUp.Models.Course", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CourseCode")
                        .IsRequired()
                        .HasMaxLength(25)
                        .IsUnicode(false);

                    b.Property<string>("CourseName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false);

                    b.Property<int>("MajorId");

                    b.HasKey("Id");

                    b.HasIndex("MajorId");

                    b.ToTable("Course");
                });

            modelBuilder.Entity("LionUp.Models.CourseDiscussionBoard", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CourseDiscussionBoardText")
                        .IsRequired()
                        .HasMaxLength(2000);

                    b.Property<int>("CourseId");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.HasIndex("UserId");

                    b.ToTable("CourseDiscussionBoard");
                });

            modelBuilder.Entity("LionUp.Models.CourseDiscussionComment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CourseDiscussionBoardId");

                    b.Property<string>("CourseDiscussionCommentText")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("CourseDiscussionBoardId");

                    b.HasIndex("UserId");

                    b.ToTable("CourseDiscussionComment");
                });

            modelBuilder.Entity("LionUp.Models.Event", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.Property<DateTime>("EndTime")
                        .HasColumnType("datetime");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false);

                    b.Property<DateTime>("StartTime")
                        .HasColumnType("datetime");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Event");
                });

            modelBuilder.Entity("LionUp.Models.EventDiscussion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("EventDiscussionText")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.Property<int>("EventId");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("EventId");

                    b.HasIndex("UserId");

                    b.ToTable("EventDiscussion");
                });

            modelBuilder.Entity("LionUp.Models.EventResponse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("EventId");

                    b.Property<string>("Response")
                        .IsRequired()
                        .HasMaxLength(15)
                        .IsUnicode(false);

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("EventId");

                    b.HasIndex("UserId");

                    b.ToTable("EventResponse");
                });

            modelBuilder.Entity("LionUp.Models.Major", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("MajorCategory")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false);

                    b.HasKey("Id");

                    b.ToTable("Major");
                });

            modelBuilder.Entity("LionUp.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false);

                    b.Property<int>("MajorId");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("SeluEmail")
                        .IsRequired()
                        .HasMaxLength(150);

                    b.Property<string>("UserRole");

                    b.HasKey("Id");

                    b.HasIndex("MajorId");

                    b.ToTable("User");
                });

            modelBuilder.Entity("LionUp.Models.Course", b =>
                {
                    b.HasOne("LionUp.Models.Major", "Major")
                        .WithMany("Course")
                        .HasForeignKey("MajorId")
                        .HasConstraintName("FK_Major_ToMajorTable");
                });

            modelBuilder.Entity("LionUp.Models.CourseDiscussionBoard", b =>
                {
                    b.HasOne("LionUp.Models.Course", "Course")
                        .WithMany("CourseDiscussionBoard")
                        .HasForeignKey("CourseId")
                        .HasConstraintName("FK_Course_ToCourseTable");

                    b.HasOne("LionUp.Models.User", "User")
                        .WithMany("CourseDiscussionBoard")
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_User_ToUserTable");
                });

            modelBuilder.Entity("LionUp.Models.CourseDiscussionComment", b =>
                {
                    b.HasOne("LionUp.Models.CourseDiscussionBoard", "CourseDiscussionBoard")
                        .WithMany("CourseDiscussionComment")
                        .HasForeignKey("CourseDiscussionBoardId")
                        .HasConstraintName("FK_Course_ToCourseDiscussionBoard");

                    b.HasOne("LionUp.Models.User", "User")
                        .WithMany("CourseDiscussionComment")
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_User_ToUser");
                });

            modelBuilder.Entity("LionUp.Models.Event", b =>
                {
                    b.HasOne("LionUp.Models.User", "User")
                        .WithMany("Event")
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_User");
                });

            modelBuilder.Entity("LionUp.Models.EventDiscussion", b =>
                {
                    b.HasOne("LionUp.Models.Event", "Event")
                        .WithMany("EventDiscussion")
                        .HasForeignKey("EventId")
                        .HasConstraintName("FK_Event_TOEventTABLE");

                    b.HasOne("LionUp.Models.User", "User")
                        .WithMany("EventDiscussion")
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_ToUser");
                });

            modelBuilder.Entity("LionUp.Models.EventResponse", b =>
                {
                    b.HasOne("LionUp.Models.Event", "Event")
                        .WithMany("EventResponse")
                        .HasForeignKey("EventId")
                        .HasConstraintName("FK_ToEvent_Table");

                    b.HasOne("LionUp.Models.User", "User")
                        .WithMany("EventResponse")
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_ToUser_Table");
                });

            modelBuilder.Entity("LionUp.Models.User", b =>
                {
                    b.HasOne("LionUp.Models.Major", "Major")
                        .WithMany("User")
                        .HasForeignKey("MajorId")
                        .HasConstraintName("FK_Major")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
