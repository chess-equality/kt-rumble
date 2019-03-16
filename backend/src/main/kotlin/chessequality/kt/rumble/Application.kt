package chessequality.kt.rumble

import io.micronaut.runtime.Micronaut

object Application {

    @JvmStatic
    fun main(args: Array<String>) {
        Micronaut.build()
                .packages("chessequality.kt.rumble")
                .mainClass(Application.javaClass)
                .start()
    }
}
