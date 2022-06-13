fn main() {
    println!("Hello, world!");
}

/*
mixelpix % rustc test.rs // <-- compiles binary
mixelpix % ./test        // <-- runs binary
Hello, world!

If we were using Cargo, then we would build the package and deploy it with cargo commands, like so:

mixelpix % cargo new hello_world

This builds the project directory, "hellow_world"

Inside the project directory is a "src" directory, and the "main.rs" file would go in the "src" directory.

mixelpix % cargo build

This builds the `Cargo.lock` file and the `/target` folder (which contains the actual, compiled, executable file - among other things).

And now it is time for:

mixelpix % cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.05s
    Running `target/debug/hello_world`
Hello, world!

*/
