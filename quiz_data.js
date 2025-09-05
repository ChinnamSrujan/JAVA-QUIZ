// Complete Java Quiz Questions Database
const allQuizQuestions = [
    {
        "question_text": "What is the numerical range of a char data type in Java?",
        "options": ["a) -128 to 127", "b) 0 to 256", "c) 0 to 32767", "d) 0 to 65535"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which of these coding types is used for data type characters in Java?",
        "options": ["a) ASCII", "b) ISO-LATIN-1", "c) UNICODE", "d) None of the mentioned"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which of these values can a boolean variable contain?",
        "options": ["a) True & False", "b) 0 & 1", "c) Any integer value", "d) true"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which of these occupy the first 0 to 127 in the Unicode character set used for characters in Java?",
        "options": ["a) ASCII", "b) ISO-LATIN-1", "c) None of the mentioned", "d) ASCII and ISO-LATIN1"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which one is a valid declaration of a boolean?",
        "options": ["a) boolean b1 = 1;", "b) boolean b2 = 'false';", "c) boolean b3 = false;", "d) boolean b4 = 'true'"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which data type value is returned by all transcendental math functions?",
        "options": ["a) int", "b) float", "c) double", "d) long"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which of the following is not an OOPS concept in Java?",
        "options": ["a) Inheritance", "b) Encapsulation", "c) Polymorphism", "d) Compilation"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which of the following is a type of polymorphism in Java?",
        "options": ["a) Compile time polymorphism", "b) Execution time polymorphism", "c) Multiple polymorphism", "d) Multilevel polymorphism"],
        "correct_answer": "a"
    },
    {
        "question_text": "When does method overloading is determined?",
        "options": ["a) At run time", "b) At compile time", "c) At coding time", "d) At execution time"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which concept of Java is a way of converting real world objects in terms of class?",
        "options": ["a) Polymorphism", "b) Encapsulation", "c) Abstraction", "d) Inheritance"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which concept of Java is achieved by combining methods and attribute into a class?",
        "options": ["a) Encapsulation", "b) Inheritance", "c) Polymorphism", "d) Abstraction"],
        "correct_answer": "a"
    },
    {
        "question_text": "What is it called if an object has its own lifecycle and there is no dependency?",
        "options": ["a) Aggregation", "b) Composition", "c) Encapsulation", "d) Association"],
        "correct_answer": "d"
    },
    {
        "question_text": "What is it called where a child object gets killed if the parent object is killed?",
        "options": ["a) Aggregation", "b) Composition", "c) Encapsulation", "d) Association"],
        "correct_answer": "b"
    },
    {
        "question_text": "Method overriding is a combination of inheritance and polymorphism?",
        "options": ["a) True", "b) false"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which component is used to compile, debug and execute java program?",
        "options": ["a) JVM", "b) JDK", "c) JIT", "d) JRE"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which component is responsible for interpreting bytecode into machine specific code?",
        "options": ["a) JVM", "b) JDK", "c) JIT", "d) JRE"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which component is responsible for running a Java program?",
        "options": ["a) JVM", "b) JDK", "c) JIT", "d) JRE"],
        "correct_answer": "d"
    },
    {
        "question_text": "What is the extension of java code files?",
        "options": ["a) .class", "b) .java", "c) .txt", "d) .js"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of the following statements is correct?",
        "options": ["a) Public method is accessible to all other classes in the hierarchy", "b) Public method is accessible only to subclasses of its parent class", "c) Public method can only be called by object of its class", "d) Public method can be accessed by calling object of the public class"],
        "correct_answer": "a"
    },
    {
        "question_text": "What is the return type of a method that does not return any value?",
        "options": ["a) int", "b) float", "c) void", "d) double"],
        "correct_answer": "c"
    },
    {
        "question_text": "What is the process of defining more than one method in a class differentiated by method signature?",
        "options": ["a) Function overriding", "b) Function overloading", "c) Function doubling", "d) None of the mentioned"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of the following is a method having the same name as that of its class?",
        "options": ["a) finalize", "b) delete", "c) class", "d) constructor"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which method can be defined only once in a program?",
        "options": ["a) main method", "b) finalize method", "c) static method", "d) private method"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which of these methods must be made static?",
        "options": ["a) main()", "b) delete()", "c) run()", "d) finalize()"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which of these access specifiers must be used for main() method?",
        "options": ["a) private", "b) public", "c) protected", "d) none of the mentioned"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of these is used to access a member of class before the object of that class is created?",
        "options": ["a) public", "b) private", "c) static", "d) protected"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which of these is used as a default for a member of a class if no access specifier is used for it?",
        "options": ["a) private", "b) public", "c) public, within its own package", "d) protected"],
        "correct_answer": "c"
    },
    {
        "question_text": "What is the process by which we can control what parts of a program can access the members of a class?",
        "options": ["a) Polymorphism", "b) Abstraction", "c) Encapsulation", "d) Recursion"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which of these keywords can be used in a subclass to call the constructor of superclass?",
        "options": ["a) super", "b) this", "c) extent", "d) extends"],
        "correct_answer": "a"
    },
    {
        "question_text": "What is the process of defining a method in a subclass having the same name & type signature as a method in its superclass?",
        "options": ["a) Method overloading", "b) Method overriding", "c) Method hiding", "d) None of the mentioned"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of these keywords can be used to prevent Method overriding?",
        "options": ["a) static", "b) constant", "c) protected", "d) final"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which of these is the correct way of calling a constructor having no parameters, of superclass A by subclass B?",
        "options": ["a) super(void);", "b) superclass.();", "c) super.A();", "d) super();"],
        "correct_answer": "d"
    },
    {
        "question_text": "Static members are not inherited to subclass.",
        "options": ["a) True", "b) False"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of the following is used for implementing inheritance through an interface?",
        "options": ["a) inherited", "b) using", "c) extends", "d) implements"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which of the following is used for implementing inheritance through class?",
        "options": ["a) inherited", "b) using", "c) extends", "d) implements"],
        "correct_answer": "c"
    },
    {
        "question_text": "Does Java support Multilevel inheritance?",
        "options": ["a) True", "b) False"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which of these keywords are used to define an abstract class?",
        "options": ["a) abst", "b) abstract", "c) Abstract", "d) abstract class"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of these is not abstract?",
        "options": ["a) Thread", "b) AbstractList", "c) List", "d) None of the Mentioned"],
        "correct_answer": "a"
    },
    {
        "question_text": "If a class inheriting an abstract class does not define all of its function then it will be known as?",
        "options": ["a) Abstract", "b) A simple class", "c) Static class", "d) None of the mentioned"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which of these is not a correct statement?",
        "options": ["a) Every class containing abstract method must be declared abstract", "b) Abstract class does not define the complete implementation of a class", "c) Abstract class can be initiated by new operator", "d) Abstract class can be inherited"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which of these packages contains abstract keywords?",
        "options": ["a) java.lang", "b) java.util", "c) java.io", "d) java.system"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which of these methods of class String is used to compare two String objects for their equality?",
        "options": ["a) equals()", "b) Equals()", "c) isequal()", "d) Isequal()"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which of these methods of class String is used to check whether a given object starts with a particular string literal?",
        "options": ["a) startsWith()", "b) endsWith()", "c) Starts()", "d) ends()"],
        "correct_answer": "a"
    },
    {
        "question_text": "What is the value returned by function compareTo() if the invoking string is less than the string compared?",
        "options": ["a) zero", "b) value less than zero", "c) value greater than zero", "d) none of the mentioned"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of these data type values is returned by equals() method of String class?",
        "options": ["a) char", "b) int", "c) boolean", "d) all of the mentioned"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which of these packages contains classes and interfaces for networking?",
        "options": ["a) java.io", "b) java.util", "c) java.net", "d) java.network"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which of these is a protocol for breaking and sending packets to an address across a network?",
        "options": ["a) TCP/IP", "b) DNS", "c) Socket", "d) Proxy Server"],
        "correct_answer": "a"
    },
    {
        "question_text": "How many ports of TCP/IP are reserved for specific protocols?",
        "options": ["a) 10", "b) 1024", "c) 2048", "d) 512"],
        "correct_answer": "b"
    },
    {
        "question_text": "How many bits are in a single IPv4 address?",
        "options": ["a) 8", "b) 16", "c) 32", "d) 64"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which of these is a full form of DNS?",
        "options": ["a) Data Network Service", "b) Data Name Service", "c) Domain Network Service", "d) Domain Name Service"],
        "correct_answer": "d"
    },
    {
        "question_text": "What is true about threading?",
        "options": ["a) run() method calls start() method and runs the code", "b) run() method creates new thread", "c) run() method can be called directly without start() method being called", "d) start() method creates new thread and calls code written in run() method"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which exception is thrown when java is out of memory?",
        "options": ["a) MemoryError", "b) OutOfMemoryError", "c) MemoryOutOfBoundsException", "d) MemoryFullException"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of these are selection statements in Java?",
        "options": ["a) break", "b) continue", "c) for()", "d) if()"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which of these keywords is used to define interfaces in Java?",
        "options": ["a) intf", "b) Intf", "c) interface", "d) Interface"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which of the following is a superclass of every class in Java?",
        "options": ["a) ArrayList", "b) Abstract class", "c) Object class", "d) String"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java code?\n1.   class   average   {\n2.   public   static   void   main ( String   args [])\n3.   {\n4.   double   num []   =   { 5.5 ,   10.1 ,   11 ,   12.8 ,   56.9 ,   2.5 } ;\n5.   double   result ;\n6.   result   =   0 ;\n7.   for   ( int   i   =   0 ;   i   <   6 ;   ++ i )\n8.   result   =   result   +   num [ i ] ;\n9.   System . out . print ( result / 6 ) ;\n10.  \n11.   }\n12.   }",
        "options": ["a) 16.34", "b) 16.566666644", "c) 16.46666666666667", "d) 16.46666666666666"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java code?\n1.   class   output   {\n2.   public   static   void   main ( String   args [])\n3.   {\n4.   double   a,   b,c ;\n5.   a   =   3.0 / 0 ;\n6.   b   =   0 / 4.0 ;\n7.   c = 0 / 0.0 ;\n8.  \n9.   System . out . println ( a ) ;\n10.   System . out . println ( b ) ;\n11.   System . out . println ( c ) ;\n12.   }\n13.   }",
        "options": ["a)  Infinity\n0.0\nNaN", "b)  0.0\nInfinity\nNaN", "c)  NaN\nInfinity\n0.0", "d) none of the mentioned"],
        "correct_answer": "a"
    },
    {
        "question_text": "What will be the output of the following Java code?\n1.   class   increment   {\n2.   public   static   void   main ( String   args [])\n3.   {\n4.   int   g   =   3 ;\n5.   System . out . print ( ++ g   *   8 ) ;\n6.   }\n7.   }",
        "options": ["a) 25", "b) 24", "c) 32", "d) 33"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java code?\n1.   class   area   {\n2.   public   static   void   main ( String   args [])\n3.   {\n4.   double   r,   pi,   a ;\n5.   r   =   9.8 ;\n6.   pi   =   3.14 ;\n7.   a   =   pi   *   r   *   r ;\n8.   System . out . println ( a ) ;\n9.   }\n10.   }",
        "options": ["a) 301.5656", "b) 301", "c) 301.56", "d) 301.56560000"],
        "correct_answer": "a"
    },
    {
        "question_text": "When Overloading does not occur?",
        "options": ["a) More than one method with same name but different method signature and different number or type of parameters", "b) More than one method with same name, same signature but different number of signature", "c) More than one method with same name, same signature, same number of parameters but different type", "d) More than one method with same name, same number of parameters and type but different signature"],
        "correct_answer": "d"
    },
    {
        "question_text": "What is it called where an object has its own lifecycle and a child object cannot belong to another parent object?",
        "options": ["a) Aggregation", "b) Composition", "c) Encapsulation", "d) Association"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which of the below is invalid identifier with the main method?",
        "options": ["a) public", "b) static", "c) private", "d) final"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   main_class\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   int   x   =   9 ;\n6.   if   ( x   ==   9 )\n7.   {\n8.   int   x   =   8 ;\n9.   System . out . println ( x ) ;\n10.   }\n11.   }\n12.   }",
        "options": ["a) 9", "b) 8", "c) Compilation error", "d) Runtime error"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   box\n2.   {\n3.   int   width ;\n4.   int   height ;\n5.   int   length ;\n6.   }\n7.   class   mainclass\n8.   {\n9.   public   static   void   main ( String   args [])\n10.   {\n11.   box   obj   =   new   box () ;\n12.   obj. width   =   10 ;\n13.   obj. height   =   2 ;\n14.   obj. length   =   10 ;\n15.   int   y   =   obj. width   *   obj. height   *   obj. length ;\n16.   System . out . print ( y ) ;\n17.   }\n18.   }",
        "options": ["a) 12", "b) 200", "c) 400", "d) 100"],
        "correct_answer": "b"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   box\n2.   {\n3.   int   width ;\n4.   int   height ;\n5.   int   length ;\n6.   }\n7.   class   mainclass\n8.   {\n9.   public   static   void   main ( String   args [])\n10.   {\n11.   box   obj1   =   new   box () ;\n12.   box   obj2   =   new   box () ;\n13.   obj1. height   =   1 ;\n14.   obj1. length   =   2 ;\n15.   obj1. width   =   1 ;\n16.   obj2   =   obj1 ;\n17.   System . out . println ( obj2. height ) ;\n18.   }\n19.   }",
        "options": ["a) 1", "b) 2", "c) Runtime error", "d) Garbage value"],
        "correct_answer": "a"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   box\n2.   {\n3.   int   width ;\n4.   int   height ;\n5.   int   length ;\n6.   }\n7.   class   mainclass\n8.   {\n9.   public   static   void   main ( String   args [])\n10.   {\n11.   box   obj   =   new   box () ;\n12.   System . out . println ( obj ) ;\n13.   }\n14.   }",
        "options": ["a) 0", "b) 1", "c) Runtime error", "d) classname@hashcode in hexadecimal form"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which of these statements is incorrect?",
        "options": ["a) All object of a class are allotted memory for the all the variables defined in the class", "b) If a function is defined public it can be accessed by object of other class by inheritation", "c) main() method must be made public", "d) All object of a class are allotted memory for the methods defined in the class"],
        "correct_answer": "d"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   access\n2.   {\n3.   public   int   x ;\n4.   static   int   y ;\n5.   void   cal ( int   a,   int   b )\n6.   {\n7.   x   +=   a   ;\n8.   y   +=   b ;\n9.   }\n10.   }\n11.   class   static_specifier\n12.   {\n13.   public   static   void   main ( String   args [])\n14.   {\n15.   access   obj1   =   new   access () ;\n16.   access   obj2   =   new   access () ;\n17.   obj1. x   =   0 ;\n18.   obj1. y   =   0 ;\n19.   obj1. cal ( 1 ,   2 ) ;\n20.   obj2. x   =   0 ;\n21.   obj2. cal ( 2 ,   3 ) ;\n22.   System . out . println ( obj1. x   +   \"   \"   +   obj2. y ) ;\n23.   }\n24.   }",
        "options": ["a) 1 2", "b) 2 3", "c) 3 2", "d) 1 5"],
        "correct_answer": "d"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   access\n2.   {\n3.   static   int   x ;\n4.   void   increment ()\n5.   {\n6.   x ++;\n7.   }\n8.   }\n9.   class   static_use\n10.   {\n11.   public   static   void   main ( String   args [])\n12.   {\n13.   access   obj1   =   new   access () ;\n14.   access   obj2   =   new   access () ;\n15.   obj1. x   =   0 ;\n16.   obj1. increment () ;\n17.   obj2. increment () ;\n18.   System . out . println ( obj1. x   +   \"   \"   +   obj2. x ) ;\n19.   }\n20.   }",
        "options": ["a) 1 2", "b) 1 1", "c) 2 2", "d) Compilation Error"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   static_out\n2.   {\n3.   static   int   x ;\n4.   static   int   y ;\n5.   void   add ( int   a   ,   int   b )\n6.   {\n7.   x   =   a   +   b ;\n8.   y   =   x   +   b ;\n9.   }\n10.   }\n11.   class   static_use\n12.   {\n13.   public   static   void   main ( String   args [])\n14.   {\n15.   static_out   obj1   =   new   static_out () ;\n16.   static_out   obj2   =   new   static_out () ;\n17.   int   a   =   2 ;\n18.   obj1. add ( a,   a   +   1 ) ;\n19.   obj2. add ( 5 ,   a ) ;\n20.   System . out . println ( obj1. x   +   \"   \"   +   obj2. y ) ;\n21.   }\n22.   }",
        "options": ["a) 7 7", "b) 6 6", "c) 7 9", "d) 9 7"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   Output\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   int   arr []   =   { 1 ,   2 ,   3 ,   4 ,   5 } ;\n6.   for   (   int   i   =   0 ;   i   <   arr. length   -   2 ;   ++ i )\n7.   System . out . println ( arr [ i ]   +   \"   \" ) ;\n8.   }\n9.   }",
        "options": ["a) 1 2", "b) 1 2 3", "c) 1 2 3 4", "d) 1 2 3 4 5"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of the following statements are incorrect?",
        "options": ["a) public members of class can be accessed by any code in the program", "b) private members of class can only be accessed by other members of the class", "c) private members of class can be inherited by a subclass, and become protected members in subclass", "d) protected members of a class can be inherited by a subclass, and become private members of the subclass"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   recursion\n2.   {\n3.   int   func   ( int   n )\n4.   {\n5.   int   result ;\n6.   result   =   func   ( n   -   1 ) ;\n7.   return   result ;\n8.   }\n9.   }\n10.   class   Output\n11.   {\n12.   public   static   void   main ( String   args [])\n13.   {\n14.   recursion   obj   =   new   recursion ()   ;\n15.   System . out . print ( obj. func ( 12 )) ;\n16.   }\n17.   }",
        "options": ["a) 0", "b) 1", "c) Compilation Error", "d) Runtime Error"],
        "correct_answer": "d"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   recursion\n2.   {\n3.   int   func   ( int   n )\n4.   {\n5.   int   result ;\n6.   if   ( n   ==   1 )\n7.   return   1 ;\n8.   result   =   func   ( n   -   1 ) ;\n9.   return   result ;\n10.   }\n11.   }\n12.   class   Output\n13.   {\n14.   public   static   void   main ( String   args [])\n15.   {\n16.   recursion   obj   =   new   recursion ()   ;\n17.   System . out . print ( obj. func ( 5 )) ;\n18.   }\n19.   }",
        "options": ["a) 0", "b) 1", "c) 120", "d) None of the mentioned"],
        "correct_answer": "b"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   recursion\n2.   {\n3.   int   fact ( int   n )\n4.   {\n5.   int   result ;\n6.   if   ( n   ==   1 )\n7.   return   1 ;\n8.   result   =   fact ( n   -   1 )   *   n ;\n9.   return   result ;\n10.   }\n11.   }\n12.   class   Output\n13.   {\n14.   public   static   void   main ( String   args [])\n15.   {\n16.   recursion   obj   =   new   recursion ()   ;\n17.   System . out . print ( obj. fact ( 5 )) ;\n18.   }\n19.   }",
        "options": ["a) 24", "b) 30", "c) 120", "d) 720"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   recursion\n2.   {\n3.   int   fact ( int   n )\n4.   {\n5.   int   result ;\n6.   if   ( n   ==   1 )\n7.   return   1 ;\n8.   result   =   fact ( n   -   1 )   *   n ;\n9.   return   result ;\n10.   }\n11.   }\n12.   class   Output\n13.   {\n14.   public   static   void   main ( String   args [])\n15.   {\n16.   recursion   obj   =   new   recursion ()   ;\n17.   System . out . print ( obj. fact ( 1 )) ;\n18.   }\n19.   }",
        "options": ["a) 1", "b) 30", "c) 120", "d) Runtime Error"],
        "correct_answer": "a"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   recursion\n2.   {\n3.   int   fact ( int   n )\n4.   {\n5.   int   result ;\n6.   if   ( n   ==   1 )\n7.   return   1 ;\n8.   result   =   fact ( n   -   1 )   *   n ;\n9.   return   result ;\n10.   }\n11.   }\n12.   class   Output\n13.   {\n14.   public   static   void   main ( String   args [])\n15.   {\n16.   recursion   obj   =   new   recursion ()   ;\n17.   System . out . print ( obj. fact ( 6 )) ;\n18.   }\n19.   }",
        "options": ["a) 1", "b) 30", "c) 120", "d) 720"],
        "correct_answer": "d"
    },
    {
        "question_text": "At line number 2 in the following code, choose 3 valid data-type attributes/qualifiers among \"final, static, native, public, private, abstract, protected\"\n1.   public   interface   Status\n2.   {\n3.   /*   insert   qualifier   here   */   int   MY_VALUE   =   10 ;\n4.   }",
        "options": ["a) final, native, private", "b) final, static, protected", "c) final, private, abstract", "d) final, static, public"],
        "correct_answer": "d"
    },
    {
        "question_text": "What would be the result if a class extends two interfaces and both have a method with the same name and signature? Let's assume that the class is not implementing that method.",
        "options": ["a) Runtime error", "b) Compile time error", "c) Code runs successfully", "d) First called method is executed successfully"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of these is an incorrect statement?",
        "options": ["a) String objects are immutable, they cannot be changed", "b) String object can point to some other reference of String variable", "c) StringBuffer class is used to store string in a buffer for later use", "d) None of the mentioned"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   String_demo\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   char   chars []   =   { 'a' ,   'b' ,   'c' } ;\n6.   String   s   =   new   String ( chars ) ;\n7.   System . out . println ( s ) ;\n8.   }\n9.   }",
        "options": ["a) a", "b) b", "c) c", "d) abc"],
        "correct_answer": "d"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   String_demo\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   int   ascii []   =   {   65 ,   66 ,   67 ,   68 } ;\n6.   String   s   =   new   String ( ascii,   1 ,   3 ) ;\n7.   System . out . println ( s ) ;\n8.   }\n9.   }",
        "options": ["a) ABC", "b) BCD", "c) CDA", "d) ABCD"],
        "correct_answer": "b"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   String_demo\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   char   chars []   =   { 'a' ,   'b' ,   'c' } ;\n6.   String   s   =   new   String ( chars ) ;\n7.   String   s1   =   \"abcd\" ;\n8.   int   len1   =   s1. length () ;\n9.   int   len2   =   s. length () ;\n10.   System . out . println ( len1   +   \"   \"   +   len2 ) ;\n11.   }\n12.   }",
        "options": ["a) 3 0", "b) 0 3", "c) 3 4", "d) 4 3"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which of these classes is the superclass of String and StringBuffer class?",
        "options": ["a) java.util", "b) java.lang", "c) ArrayList", "d) None of the mentioned"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of these methods is used to compare a specific region inside a string with another specific region in another string?",
        "options": ["a) regionMatch()", "b) match()", "c) RegionMatches()", "d) regionMatches()"],
        "correct_answer": "d"
    },
    {
        "question_text": "What will be the output of the following Java code?\n1.   class   output\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   StringBuffer   c   =   new   StringBuffer ( \"Hello\" ) ;\n6.   System . out . println ( c. length ()) ;\n7.   }\n8.   }",
        "options": ["a) 4", "b) 5", "c) 6", "d) 7"],
        "correct_answer": "b"
    },
    {
        "question_text": "What will be the output of the following Java code?\n1.   class   output\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   StringBuffer   sb = new   StringBuffer ( \"Hello\" ) ;\n6.   sb. replace ( 1 , 3 , \"Java\" ) ;\n7.   System . out . println ( sb ) ;\n8.   }\n9.   }",
        "options": ["a) Hello java", "b) Hellojava", "c) HJavalo", "d) Hjava"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java code?\n1.   class   output\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   StringBuffer   s1   =   new   StringBuffer ( \"Hello\" ) ;\n6.   s1. setCharAt ( 1 , 'x' ) ;\n7.   System . out . println ( s1 ) ;\n8.   }\n9.   }",
        "options": ["a) xello", "b) xxxxx", "c) Hxllo", "d) Hexlo"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java code?\n1.   class   output\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   StringBuffer   s1   =   new   StringBuffer ( \"Hello   World\" ) ;\n6.   s1. insert ( 6   ,   \"Good   \" ) ;\n7.   System . out . println ( s1 ) ;\n8.   }\n9.   }",
        "options": ["a) HelloGoodWorld", "b) HellGoodoWorld", "c) HellGood oWorld", "d) Hello Good World"],
        "correct_answer": "d"
    },
    {
        "question_text": "What will be the output of the following Java code?\n1.   class   output\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   StringBuffer   s1   =   new   StringBuffer ( \"Hello\" ) ;\n6.   s1. insert ( 1 , \"Java\" ) ;\n7.   System . out . println ( s1 ) ;\n8.   }\n9.   }",
        "options": ["a) hello", "b) java", "c) Hello Java", "d) HJavaello"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which of the following is not a segment of memory in java?",
        "options": ["a) Stack Segment", "b) Heap Segment", "c) Code Segment", "d) Register Segment"],
        "correct_answer": "d"
    },
    {
        "question_text": "Does code Segment load the java code?",
        "options": ["a) True", "b) False"],
        "correct_answer": "a"
    },
    {
        "question_text": "What is JVM?",
        "options": ["a) Bootstrap", "b) Interpreter", "c) Extension", "d) Compiler"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which one of the following is a class loader?",
        "options": ["a) Bootstrap", "b) Compiler", "c) Heap", "d) Interpreter"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which class loader loads jar files from the JDK directory?",
        "options": ["a) Bootstrap", "b) Extension", "c) System", "d) Heap"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which of the following matches nonword characters using regular expressions in java?",
        "options": ["a) \\w", "b) \\W", "c) \\s", "d) \\S"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of the following matches the end of the string using regular expression in java?",
        "options": ["a) \\z", "b) \\\\", "c) \\*", "d) \\Z"],
        "correct_answer": "a"
    },
    {
        "question_text": "What does public int end(int group) return?",
        "options": ["a) offset from last character of the subsequent group", "b) offset from first character of the subsequent group", "c) offset from last character matched", "d) offset from first character matched"],
        "correct_answer": "a"
    },
    {
        "question_text": "What does public String replaceAll(string replace) do?",
        "options": ["a) Replace all characters that matches pattern with a replacement string", "b) Replace first subsequence that matches pattern with a replacement string", "c) Replace all other than first subsequence of that matches pattern with a replacement string", "d) Replace every subsequence of the input sequence that matches pattern with a replacement string"],
        "correct_answer": "d"
    },
    {
        "question_text": "What does public int start() return?",
        "options": ["a) returns start index of the input string", "b) returns start index of the current match", "c) returns start index of the previous match", "d) none of the mentioned"],
        "correct_answer": "c"
    },
    {
        "question_text": "What should not be done to avoid deadlock?",
        "options": ["a) Avoid using multiple threads", "b) Avoid hold several locks at once", "c) Execute foreign code while holding a lock", "d) Use interruptible locks"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which of the following is a correct constructor for thread?",
        "options": ["a) Thread(Runnable a, String str)", "b) Thread(int priority)", "c) Thread(Runnable a, int priority)", "d) Thread(Runnable a, ThreadGroup t)"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which of the following stops execution of a thread?",
        "options": ["a) Calling SetPriority() method on a Thread object", "b) Calling notify() method on an object", "c) Calling wait() method on an object", "d) Calling read() method on an InputStream object"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of the following will ensure the thread will be in running state?",
        "options": ["a) yield()", "b) notify()", "c) wait()", "d) Thread.killThread()"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java code?\n1.   class   String_demo\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   char   chars []   =   { 'a' ,   'b' ,   'c' } ;\n6.   String   s   =   new   String ( chars ) ;\n7.   System . out . println ( s ) ;\n8.   }\n9.   }",
        "options": ["a) abc", "b) a", "c) b", "d) c"],
        "correct_answer": "a"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   recursion\n2.   {\n3.   int   func   ( int   n )\n4.   {\n5.   int   result ;\n6.   if   ( n   ==   1 )\n7.   return   1 ;\n8.   result   =   func   ( n   -   1 ) ;\n9.   return   result ;\n10.   }\n11.   }\n12.   class   Output\n13.   {\n14.   public   static   void   main ( String   args [])\n15.   {\n16.   recursion   obj   =   new   recursion ()   ;\n17.   System . out . print ( obj. func ( 5 )) ;\n18.   }\n19.   }",
        "options": ["a) 1", "b) 120", "c) 0", "d) None of the mentioned"],
        "correct_answer": "a"
    },
    {
        "question_text": "What will be the output of the following Java code?\n1.   class   output\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   String   c   =   \"Hello   i   love   java\" ;\n6.   boolean   var ;\n7.   var   =   c. startsWith ( \"hello\" ) ;\n8.   System . out . println ( var ) ;\n9.   }\n10.   }",
        "options": ["a) 0", "b) true", "c) 1", "d) false"],
        "correct_answer": "d"
    },
    {
        "question_text": "What will be the output of the following Java program?\n1.   class   output\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   StringBuffer   s1   =   new   StringBuffer ( \"Quiz\" ) ;\n6.   StringBuffer   s2   =   s1. reverse () ;\n7.   System . out . println ( s2 ) ;\n8.   }\n9.   }",
        "options": ["a) QuizziuQ", "b) ziuQQuiz", "c) Quiz", "d) ziuQ"],
        "correct_answer": "d"
    },
    {
        "question_text": "What will be the output of the following Java code?\n1.   class   Output\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   Integer   i   =   new   Integer ( 257 ) ;\n6.   byte   x   =   i. byteValue () ;\n7.   System . out . print ( x ) ;\n8.   }\n9.   }",
        "options": ["a) 257", "b) 256", "c) 1", "d) 0"],
        "correct_answer": "c"
    },
    {
        "question_text": "What will be the output of the following Java code?\n1.   class   Output\n2.   {\n3.   public   static   void   main ( String   args [])\n4.   {\n5.   double   x   =   2.0 ;\n6.   double   y   =   3.0 ;\n7.   double   z   =   Math . pow (   x,   y   ) ;\n8.   System . out . print ( z ) ;\n9.   }\n10.   }",
        "options": ["a) 9.0", "b) 8.0", "c) 4.0", "d) 2.0"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which keyword is used to create a package in Java?",
        "options": ["a) package", "b) import", "c) class", "d) interface"],
        "correct_answer": "a"
    },
    {
        "question_text": "What is the default value of a boolean variable in Java?",
        "options": ["a) true", "b) false", "c) 0", "d) null"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of the following is not a Java keyword?",
        "options": ["a) static", "b) Boolean", "c) void", "d) private"],
        "correct_answer": "b"
    },
    {
        "question_text": "What is the size of int data type in Java?",
        "options": ["a) 16 bits", "b) 32 bits", "c) 64 bits", "d) 8 bits"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which method is used to find the length of a string in Java?",
        "options": ["a) size()", "b) length()", "c) getSize()", "d) getLength()"],
        "correct_answer": "b"
    },
    {
        "question_text": "What is the parent class of all classes in Java?",
        "options": ["a) String", "b) Class", "c) Object", "d) System"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which of the following is used to handle exceptions in Java?",
        "options": ["a) try-catch", "b) if-else", "c) switch-case", "d) for-loop"],
        "correct_answer": "a"
    },
    {
        "question_text": "What is the correct way to declare an array in Java?",
        "options": ["a) int arr[] = new int[5];", "b) int arr = new int[5];", "c) array int arr[5];", "d) int arr[5];"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which operator is used to compare two values in Java?",
        "options": ["a) =", "b) ==", "c) ===", "d) equals"],
        "correct_answer": "b"
    },
    {
        "question_text": "What is the default access modifier for a class in Java?",
        "options": ["a) public", "b) private", "c) protected", "d) package-private"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which loop is guaranteed to execute at least once?",
        "options": ["a) for loop", "b) while loop", "c) do-while loop", "d) enhanced for loop"],
        "correct_answer": "c"
    },
    {
        "question_text": "What is the correct syntax for a for loop in Java?",
        "options": ["a) for(int i=0; i<10; i++)", "b) for(i=0; i<10; i++)", "c) for(int i=0, i<10, i++)", "d) for i=0 to 10"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which of the following is not a primitive data type in Java?",
        "options": ["a) int", "b) float", "c) String", "d) char"],
        "correct_answer": "c"
    },
    {
        "question_text": "What is the purpose of the 'final' keyword in Java?",
        "options": ["a) To make a variable constant", "b) To prevent method overriding", "c) To prevent class inheritance", "d) All of the above"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which collection class allows duplicate elements?",
        "options": ["a) Set", "b) List", "c) Map", "d) HashSet"],
        "correct_answer": "b"
    },
    {
        "question_text": "What is the difference between '==' and 'equals()' in Java?",
        "options": ["a) No difference", "b) == compares references, equals() compares content", "c) == compares content, equals() compares references", "d) Both compare content"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which keyword is used to inherit a class in Java?",
        "options": ["a) inherits", "b) extends", "c) implements", "d) super"],
        "correct_answer": "b"
    },
    {
        "question_text": "What is the maximum number of classes that can be defined in a single Java file?",
        "options": ["a) 1", "b) 2", "c) 10", "d) No limit"],
        "correct_answer": "d"
    },
    {
        "question_text": "Which method is called when an object is created in Java?",
        "options": ["a) main()", "b) constructor", "c) finalize()", "d) init()"],
        "correct_answer": "b"
    },
    {
        "question_text": "What is the purpose of the 'this' keyword in Java?",
        "options": ["a) To refer to current object", "b) To call parent class method", "c) To create new object", "d) To access static variables"],
        "correct_answer": "a"
    },
    {
        "question_text": "Which of the following is true about Java?",
        "options": ["a) Java is platform independent", "b) Java supports multiple inheritance", "c) Java is a procedural language", "d) Java doesn't support polymorphism"],
        "correct_answer": "a"
    },
    {
        "question_text": "What is the file extension for Java source files?",
        "options": ["a) .class", "b) .java", "c) .jar", "d) .exe"],
        "correct_answer": "b"
    },
    {
        "question_text": "Which of the following is used to read input from the user in Java?",
        "options": ["a) System.in", "b) Scanner", "c) BufferedReader", "d) All of the above"],
        "correct_answer": "d"
    },
    {
        "question_text": "What is the correct way to create a thread in Java?",
        "options": ["a) Extend Thread class", "b) Implement Runnable interface", "c) Both a and b", "d) Use ThreadGroup"],
        "correct_answer": "c"
    },
    {
        "question_text": "Which package contains the String class in Java?",
        "options": ["a) java.util", "b) java.lang", "c) java.io", "d) java.text"],
        "correct_answer": "b"
    },
    {
        "question_text": "What is the purpose of garbage collection in Java?",
        "options": ["a) To delete unused variables", "b) To free memory occupied by unreferenced objects", "c) To clean up code", "d) To optimize performance"],
        "correct_answer": "b"
    }
];
