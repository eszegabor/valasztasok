export default class VálasztásiEredmény {
    // Láthatósági szintek:
    // - public: alapértelmezés
    // - private: #-karakter jelzi a tag azonosítója elején
    // - protected: ki kell írni

    // adattagok: (illik private láthatósági szinttel létrehozni őket)
    #kerület: number;
    #szavazatok: number;
    #vezetékNév: string;
    #keresztNév: string;
    #pártJel: string;

    // kódtagok:
    get név(): string {
        return `${this.#vezetékNév} ${this.#keresztNév}`;
    }

    get szavazatok(): number {
        return this.#szavazatok;
    }

    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this.#kerület = parseInt(m[0]);
        this.#szavazatok = parseInt(m[1]);
        this.#vezetékNév = m[2];
        this.#keresztNév = m[3];
        this.#pártJel = m[4];
    }
}
