using System;
using LionUp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LionUp.Data
{
    public partial class LionUpContext : DbContext
    {
        public LionUpContext()
        {
        }

        public LionUpContext(DbContextOptions<LionUpContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Course> Course { get; set; }
        public virtual DbSet<CourseDiscussionBoard> CourseDiscussionBoard { get; set; }
        public virtual DbSet<CourseDiscussionComment> CourseDiscussionComment { get; set; }
        public virtual DbSet<Event> Event { get; set; }
        public virtual DbSet<EventDiscussion> EventDiscussion { get; set; }
        public virtual DbSet<EventResponse> EventResponse { get; set; }
        public virtual DbSet<Major> Major { get; set; }
        public virtual DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=tcp:lionupcmps411.database.windows.net,1433;Initial Catalog=CMPS411;Persist Security Info=False;User ID=CMPS411;Password=Lionup2019;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Course>(entity =>
            {
                entity.Property(e => e.CourseCode)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.CourseName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Major)
                    .WithMany(p => p.Course)
                    .HasForeignKey(d => d.MajorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Major_ToMajorTable");

         
            });

            modelBuilder.Entity<CourseDiscussionBoard>(entity =>
            {
                entity.Property(e => e.CourseDiscussionBoardText)
                    .IsRequired()
                    .HasMaxLength(2000);

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.CourseDiscussionBoard)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Course_ToCourseTable");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CourseDiscussionBoard)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_User_ToUserTable");
            });

            modelBuilder.Entity<CourseDiscussionComment>(entity =>
            {
                entity.Property(e => e.CourseDiscussionCommentText)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.HasOne(d => d.CourseDiscussionBoard)
                    .WithMany(p => p.CourseDiscussionComment)
                    .HasForeignKey(d => d.CourseDiscussionBoardId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Course_ToCourseDiscussionBoard");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CourseDiscussionComment)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_User_ToUser");
            });

            modelBuilder.Entity<Event>(entity =>
            {
                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.EndTime).HasColumnType("datetime");

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.StartTime).HasColumnType("datetime");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Event)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_User");
            });

            modelBuilder.Entity<EventDiscussion>(entity =>
            {
                entity.Property(e => e.EventDiscussionText)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.EventDiscussion)
                    .HasForeignKey(d => d.EventId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Event_TOEventTABLE");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.EventDiscussion)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ToUser");
            });

            modelBuilder.Entity<EventResponse>(entity =>
            {
                entity.Property(e => e.Response)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.EventResponse)
                    .HasForeignKey(d => d.EventId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ToEvent_Table");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.EventResponse)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ToUser_Table");
            });

            modelBuilder.Entity<Major>(entity =>
            {
                entity.Property(e => e.MajorCategory)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

           

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.SeluEmail)
                    .IsRequired()
                    .HasMaxLength(150);

                entity.HasOne(d => d.Major)
                    .WithMany(p => p.User)
                    .HasForeignKey(d => d.MajorId)
                    .HasConstraintName("FK_Major");
            });
        }
    }
}
