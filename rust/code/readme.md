Aside from this file, this folder contains the results of running the command:

```
% cargo new helloworld
```

Odd... didn't create a .gitignore file 🤔... Ah, this dir is within a project which already has `/target` in a .gitignore file.  I added it in, then ran:

```
% cargo build
```

This builds the `Cargo.lock` file and the `/target` folder (which contains the actual, compiled, executable file - among other things).

And now it is time for:

```
% cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.05s
    Running `target/debug/helloworld`
Hello, world!
```

woo-hoo
