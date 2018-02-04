import { JsonMLs } from "../prest/jsonml/jsonml";

export function hello(name: string): JsonMLs {
    return [
        ["p",
            ["input.w3-input",
                { type: "text", value: name }
            ],
            ["p", "Hello ", ["strong", name], " !"]
        ]
    ];
}
