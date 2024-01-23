{

    const numbers: number[] = [1,2,3] // använd detta nu
    // Anant sätt att typa arrayer - komer vi in på senare (generics)
    const num: Array<number> = [1,2,3 ]

    const bools: boolean[] = [true, false]

    
    const addNumbers = (numbers: number[]): number => {
        return numbers.reduce((acc, current) => acc + current, 0)
    }

    function greet(name: string): void {
        console.log(`hey ${name})
    }


}