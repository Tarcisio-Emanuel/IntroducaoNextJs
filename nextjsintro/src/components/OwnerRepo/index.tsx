"use client"

import { useState } from "react";

import Image from "next/image";
interface OwnerRequest {
    avatar_url: string;
    name: string;
}

export function OwnerRepo({ avatar_url, name }: OwnerRequest) {

    const [shwo, setShow] = useState(false)

    return (<div>

        {shwo && (
            <>
                <Image
                    src={avatar_url}
                    alt="avatar do usuaario"
                    width={34}
                    height={34}
                    style={{ borderRadius: 8 }}
                />
                <strong>{name}</strong>
            </>
        )}

        <button onClick = { () => setShow(!shwo)}>
            {shwo ? "Ocultar Nome" : "Mostrar Nome"}
        </button>

    </div>
    )
}