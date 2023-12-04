import fs from "fs";
import VálasztásiEredmény from "./VálasztásiEredmény";

export default class Megoldás {
    // adattag(ok):
    #ve: VálasztásiEredmény[] = [];

    // kódtagok:
    get jelöltekSzáma(): number {
        return this.#ve.length;
    }

    constructor(állományNeve: string) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // const temp: string[] = fs.readFileSync(állományNeve).toString().split("\n");
        for (const sor of fs.readFileSync(állományNeve).toString().split("\n")) {
            const aktSor: string = sor.trim(); // trim()-> WhiteSpace karakterek levágása
            if (aktSor.length > 0) {
                // utolsó üres sor kihagyása
                this.#ve.push(new VálasztásiEredmény(aktSor));
            }
        }
    }

    #képviselőKeresése(név: string): VálasztásiEredmény | null {
        // vagy:
        // this.#ve.forEach(e => {
        //     if (e.név == név) return e;
        // });

        // vagy:
        for (const e of this.#ve) {
            if (e.név == név) return e;
        }

        return null;
    }

    képviselőKeresése(név: string): string {
        const keresettKépviselő: VálasztásiEredmény | null = this.#képviselőKeresése(név);
        if (keresettKépviselő == null) {
            return "Ilyen  nevű  képviselőjelölt  nem  szerepel a nyilvántartásban!";
        } else {
            return `${név} ${keresettKépviselő.szavazatok} szavazatot kapott.`;
        }
    }
}
