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
    }
];
