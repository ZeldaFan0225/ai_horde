const {AIHorde, RatingArtifactsRatings, ModelGenerationInputPostProcessingTypes} = require( ".." )

main()
version()

console.log(ModelGenerationInputPostProcessingTypes)

async function version() {
    const ai_horde = new AIHorde({
        cache_interval: 1000 * 10,
        cache: {
            generations_check: 1000 * 30
        }
    })

    console.log(RatingArtifactsRatings)
    console.log(await ai_horde.getUserDetails(1))
    // New endpoint smoke test (no token required)
    try {
        const privacy = await ai_horde.getPrivacyDocument({ format: 'html' })
        console.log('Privacy doc keys:', Object.keys(privacy))
    } catch (e) {
        console.log('Privacy doc fetch failed (possibly offline)')
    }
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
    console.log(ai_horde.VERSION) // To try to get the version of the library
    
    const check = await ai_horde.getImageGenerationCheck(generation.id)
    console.log(check)
    console.log(ai_horde.cache.generations_check)
    await ai_horde.deleteImageGenerationRequest(generation.id)
}
