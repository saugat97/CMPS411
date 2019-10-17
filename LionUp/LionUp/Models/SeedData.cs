using LionUp.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LionUp.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new LionUpContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<LionUpContext>>()))
            {
                //Look up for Majors
                if (context.Major.Any())
                {
                    return; //DB has been seeded
                }

                context.Major.AddRange(
                    new Major
                    {
                        MajorCategory = "Accounting"
                    },
                    new Major
                    {
                        MajorCategory = "Biology"
                    },
                    new Major
                    {
                        MajorCategory = "Biochemistry"
                    },
                    new Major
                    {
                        MajorCategory = "Chemistry"
                    },
                    new Major
                    {
                        MajorCategory = "Computer Science"
                    },
                    new Major
                    {
                        MajorCategory = "Economics"
                    },
                    new Major
                    {
                        MajorCategory = "English"
                    },
                    new Major
                    {
                        MajorCategory = "Health and Kinesiology"
                    },
                    new Major
                    {
                        MajorCategory = "History"
                    },
                    new Major
                    {
                        MajorCategory = "Information Technology"
                    },
                    new Major
                    {
                        MajorCategory = "Physics",
                    },
                    new Major
                    {
                        MajorCategory = "Mathematics",
                    }
                );


                //Look up for courses
                //if (context.Course.Any())
                //{
                //    return;  //DB has already been seeded
                //}

                //context.Course.AddRange(
                //    new Course
                //    {
                //        CourseCode = "CMPS 161",
                //        CourseName = "Algorithm DSGN/IMPLMNT I",
                //        MajorId = 8
                //    },
                //    new Course
                //    {
                //        CourseCode = "CMPS 280",
                //        CourseName = "Algorithm DSGN/IMPLMNT II",
                //        MajorId = 8
                //    },
                //    new Course
                //    {
                //        CourseCode = "CMPS 285",
                //        CourseName = "Software Engineering",
                //        MajorId = 8
                //    },
                //    new Course
                //    {
                //        CourseCode = "CMPS 290",
                //        CourseName = "Computer Organization",
                //        MajorId = 8
                //    },
                //    new Course
                //    {
                //        CourseCode = "CMPS 390",
                //        CourseName = "Data Structure",
                //        MajorId = 8
                //    },
                //    new Course
                //    {
                //        CourseCode = "CMPS 401",
                //        CourseName = "Survey of Programming Languages",
                //        MajorId = 8
                //    },
                //    new Course
                //    {
                //        CourseCode = "CMPS 411",
                //        CourseName = "Capstone I",
                //        MajorId = 8
                //    },
                //    new Course
                //    {
                //        CourseCode = "CMPS 431",
                //        CourseName = "Operating System",
                //        MajorId = 8
                //    },
                //    new Course
                //    {
                //        CourseCode = "CMPS 479",
                //        CourseName = "Automata",
                //        MajorId = 8
                //    },
                //    new Course
                //    {
                //        CourseCode = "Math 200",
                //        CourseName = "Calculus I",
                //        MajorId = 15
                //    }
                //);


                context.SaveChanges();
            }

        }
    }
}