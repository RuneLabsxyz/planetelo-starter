// Generated by dojo-bindgen on Thu, 22 Aug 2024 20:04:33 +0000. Do not modify this file manually.
// Import the necessary types from the recs SDK
// generate again with `sozo build --typescript`
import { defineComponent, Type as RecsType } from "@dojoengine/recs";
import type { World } from "@dojoengine/recs";
export type ContractComponents = Awaited<
    ReturnType<typeof defineContractComponents>
>;

// Type definition for `dojo::model::layout::Layout` enum
export type Layout =
    | { type: "Fixed"; value: RecsType.NumberArray }
    | { type: "Struct"; value: RecsType.StringArray }
    | { type: "Tuple"; value: RecsType.StringArray }
    | { type: "Array"; value: RecsType.StringArray }
    | { type: "ByteArray" }
    | { type: "Enum"; value: RecsType.StringArray };

export const LayoutDefinition = {
    type: RecsType.String,
    value: RecsType.String,
};

// Type definition for `core::byte_array::ByteArray` struct
export interface ByteArray {
    data: String[];
    pending_word: BigInt;
    pending_word_len: Number;
}
export const ByteArrayDefinition = {
    data: RecsType.StringArray,
    pending_word: RecsType.BigInt,
    pending_word_len: RecsType.Number,
};

// Type definition for `dojo::model::layout::FieldLayout` struct
export interface FieldLayout {
    selector: BigInt;
    layout: Layout;
}
export const FieldLayoutDefinition = {
    selector: RecsType.BigInt,
    layout: LayoutDefinition,
};

// Type definition for `dojo_starter::models::Moves` struct
export interface Session {
    id: Number;
    player1: BigInt;
    player2: BigInt;
    secret: Number;
    winner: Number;
}
export const SessionDefinition = {
    id: RecsType.Number,
    player1: RecsType.BigInt,
    player2: RecsType.BigInt,
    secret: RecsType.Number,
    winner: RecsType.Number,
};

export interface Guess {
    player: BigInt;
    session_id: Number;
    guess: Number;
}

export const GuessDefinition = {
    player: RecsType.BigInt,
    session_id: RecsType.Number,
    guess: RecsType.Number,
};

export function defineContractComponents(world: World) {
    return {
        // Model definition for `dojo_starter::models::Moves` model
        Session: (() => {
            return defineComponent(
                world,
                {
                    id: RecsType.Number,
                    player1: RecsType.BigInt,
                    player2: RecsType.BigInt,
                    secret: RecsType.Number,
                    winner: RecsType.Number,
                },
                {
                    metadata: {
                        namespace: "game",
                        name: "Session",
                        types: ["u32", "ContractAddress", "ContractAddress", "u32", "u8"],
                        customTypes: [],
                    },
                }
            );
        })(),

        // Model definition for `dojo_starter::models::DirectionsAvailable` model
        Guess: (() => {
            return defineComponent(
                world,
                {
                    player: RecsType.BigInt,
                    session_id: RecsType.Number,
                    guess: RecsType.Number,
                },
                {
                    metadata: {
                        namespace: "game",
                        name: "Guess",
                        types: ["ContractAddress", "u32", "u32"],
                        customTypes: [],
                    },
                }
            );
        })(),

    };
}