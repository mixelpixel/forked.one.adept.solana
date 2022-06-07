// https://adept.at/forked/intro-to-rust
// :( having trouble in Atom with the rust-analyzer: https://rust-analyzer.github.io/manual.html#rust-analyzer-language-server-binary

/* Variables, println! & Macros */
// fn main() {
//     let mut x: i8 = 5;
//     println!("Hello, Patrick! {}",x);
//     // x = 128;
//     x = 127;
//     println!("Hello, Patrick! {}",x);
//
//     let mut tf: bool = true;
//     println!("{}", tf);
//     tf = false;
//     println!("{}", tf);
//
//     let mut characters = "this is some text";
//     characters = "rust defaults to a char type of unicode with 4 bytes 🥰";
//     // println!("{:?}", characters); // <--- quote enclosed... is it a ternary? Nope is a debugging thing I think
//     println!("{}", characters);
//
//     // let mut explicit: char = "explicit declaration";
//     let mut explicit: &str = "explicit declaration";
//     println!("{}", explicit);
//
//     let charitable: char = 'e';
//     println!("{}", charitable);
// }

/* Data Types: Scalar & Composite */
// fn main() {
//     // Tuples
//     let mut t = (1, "bob", true);
//     println!("the contents of a structured data set, or tuple: {}, {}, {}", t.0, t.1, t.2);
//     t.0 = 45;
//     println!("{}", t.0);
//
//     // Destructuring, or deconstructing
//     let (a, b, c) = t;
//     println!("{}, {}, {}", a, b, c);
//     println!("{:?}", t);
//
//     // Arrays - must be a consistent data type & will have a fixed length (num of elements)
//     // let l = [1, 2, 3, 4, 5];
//     // l = [1, 2, 3, 4, 5, 6]; // <-- changing num of elements not allowed even if `let mut l`
//     let mut l = [1, 2, 3, 4, 5];
//     println!("{:?}", l);
//     l = [1, 2, 3, 4, 20]; // <-- num of elements (len) stays the same, element values can change
//     println!("the last element is {}", l[4]);
//     println!("the last element is {}", l[l.len() - 1]);
//
//     // Vectors: pushing and popping
//     // instantiate the vector
//     let mut vec_example = vec![1,2,3];
//     println!("starting vector data is {:?}", vec_example);
//     vec_example.push(4);
//     println!("push vector data is {:?}", vec_example);
//     vec_example.pop();
//     println!("popped vector data is {:?}", vec_example);
//
// }

/* Loops & Control Flow  */
fn main() {
    // Tuples - can NOT be iterated over!!!
    let mut t = (1, "bob", true);
    // Arrays
    let mut a = [1, 2, 3, 4, 5];
    for item in a {
        println!("> {}", item);
    }

    // Vectors - looping requires explicitly calling the iter() method
    // & and * for referencing and dereferencing
    // & signifies a referenced value
    // * signifies a dereferenced value
    let mut vec_example = vec![1, 2, 3, 4, 5, 6];
    for data in vec_example.iter() {
        // if *data == 2 {
        if *data % 2 == 0 {
            println!("-> {}", data)
        } else {
            // println!("Not currently on two", );
            println!("Not currently on an even number", );
        }
    }

}
