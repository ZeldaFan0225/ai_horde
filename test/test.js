const StableHorde = require( ".." )

//main()
version()

console.log(StableHorde.ModelGenerationInputPostProcessingTypes)

async function version() {
    const ai_horde = new StableHorde({
        cache_interval: 1000 * 10,
        cache: {
            generations_check: 1000 * 30
        }
    })

    console.log(await ai_horde.findUser({token: ""}))
}

async function main() {
    const ai_horde = new StableHorde({
        cache_interval: 1000 * 10,
        cache: {
            generations_check: 1000 * 30
        }
    })
    
    const generation = await ai_horde.postAsyncGenerate({
        prompt: "The legend of Zelda"
    })
    console.log(generation)
    
    const check = await ai_horde.getGenerationCheck(generation.id)
    console.log(check)
    console.log(ai_horde.cache.generations_check)
}