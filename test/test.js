const StableHorde = require( ".." )

//main()
rating_test()

console.log(StableHorde.ModelGenerationInputPostProcessingTypes)

async function main() {
    const stable_horde = new StableHorde({
        cache_interval: 1000 * 10,
        cache: {
            generations_check: 1000 * 30
        }
    })
    
    const generation = await stable_horde.postAsyncGenerate({
        prompt: "The legend of Zelda"
    })
    console.log(generation)
    
    const check = await stable_horde.getGenerationCheck(generation.id)
    console.log(check)
    console.log(stable_horde.cache.generations_check)
}