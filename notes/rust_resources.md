# Cargo

https://doc.rust-lang.org/cargo/

> Cargo is the Rust package manager. Cargo downloads your Rust package's dependencies, compiles your packages, makes distributable packages, and uploads them to crates.io, the Rust community’s package registry.

We'll use Rust to compile (i.e. build) our programs, and then run them.

## Cargo.toml

A .toml or "TOML" file is just a configuration file for dependencies and such, like a package.json file for managing Node packages.

per: https://en.wikipedia.org/wiki/TOML

> The name "TOML" is an acronym for "Tom's Obvious, Minimal Language"[5] referring to its creator, Tom Preston-Werner.

# Anchor

## NOTE: Project Serum GitHub Doc

sunsetting: https://project-serum.github.io/anchor/getting-started/introduction.html

> This documentation is being sunset in favor of [The Anchor Book](https://book.anchor-lang.com/).  At this point in time, either documentation source may contain information that the other does not.

## The Anchor Book:

https://book.anchor-lang.com/

> What is Anchor?
>
> Anchor is a framework for quickly building secure Solana programs.
>
> With Anchor you can build programs quickly because it writes various boilerplate for you such as (de)serialization of accounts and instruction data.
>
> You can build secure programs more easily because Anchor handles certain security checks for you. On top of that, it allows you to succinctly define additional checks and keep them separate from your business logic.
>
> Both of these aspects mean that instead of working on the tedious parts of raw Solana programs, you can spend more time working on what matters most, your product.

# Crates

## Solana Program

https://docs.rs/solana-program/latest/solana_program/#

> The base library for all Solana on-chain Rust programs.

## Packages & crates

https://doc.rust-lang.org/book/ch07-01-packages-and-crates.html

> A *package* is one or more crates that provide a set of functionality. A package contains a Cargo.toml file that describes how to build those crates.

> A *crate* can be a binary crate or a library crate. Binary crates are programs you can compile to an executable that you can run, such as a command-line program or a server. They must have a function called `main` that defines what happens when the executable runs. All the crates we’ve created so far have been binary crates.
