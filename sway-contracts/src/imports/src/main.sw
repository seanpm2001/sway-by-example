contract;
// Importing within the same project
// ABI
// must be imported first
mod imports_library;
use ::imports_library::*;

// Importing the standard library
// STD Lib
// https://github.com/FuelLabs/sway/tree/master/sway-lib-std
use std::{
    identity::*,
    address::*,
    constants::*,
    auth::msg_sender,
};

// Importing library from a different project
use libraries::data_structures::Player;

impl Imports for Contract {
    fn add(_x: u64, _y: u64) {
        let z = _x + _y;
    }

    fn last_user() {
        let user = msg_sender().unwrap();
    }

    fn create_player(_score: u64) {
        let player = Player {
            id: msg_sender().unwrap(),
            score: _score
        };
    }
}