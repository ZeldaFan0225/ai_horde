const {AIHorde} = require( ".." )

main()
version()

console.log(AIHorde.ModelGenerationInputPostProcessingTypes)

async function version() {
    const ai_horde = new AIHorde({
        cache_interval: 1000 * 10,
        cache: {
            generations_check: 1000 * 30
        }
    })

    console.log(await ai_horde.getUserDetails(1))
}

async function main() {
    const ai_horde = new AIHorde({
        cache_interval: 1000 * 10,
        cache: {
            generations_check: 1000 * 30
        }
    })
    
    const generation = await ai_horde.postAsyncImageGenerate({
        prompt: "The legend of Zelda"
    })
    console.log(generation)
    
    const check = await ai_horde.getImageGenerationCheck(generation.id)
    console.log(check)
    console.log(ai_horde.cache.generations_check)
}