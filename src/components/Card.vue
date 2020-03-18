<template>
    <div>
        <div class="card has-text-left">
            <div class="card-content">
                <div class="columns">
                    <div class="column is-one-third">
                        <div v-if="this.attachs && this.attachs.length > 0">
                            <carousel :perPage="carouselimg">
                                <slide v-for="img in attachs"
                                    :key="img.id"
                                >
                                    <img class="image" :src="img.url" />
                                </slide>
                            </carousel>
                        </div>
                        <div v-else>
                            <carousel :perPage="carouselimg">
                                <slide>
                                    <img class="image" src="http://placehold.it/400x400?text=Tidak ada gambar" />
                                </slide>
                            </carousel>
                        </div>
                    </div>
                    <div class="column">
                        <h3 id="text-color" class="title is-5 is-spaced bd-anchor-title">
                            <a class="bd-anchor-link" href="#text-color">
                                #
                            </a>
                            <span class="bd-anchor-name">
                                <span v-for="kat in kategori"
                                    :key="kat.id"
                                > {{ kat.fields.Name }} </span>
                            </span>
                        </h3><hr>
                        <p class="title is-4">
                            <a :href="this.url" target="_blank">{{ this.title }}</a>
                        </p>

                        <read-more more-str="read more" :text="this.desc" link="#" less-str="read less" :max-chars="100">
                        </read-more>
                        <br>

                        <b>Sumber :</b> 
                        <span v-for="sum in sumber"
                            :key="sum.id"
                        > 
                            <a :href="sum.fields.URL" target="_blank"> {{ sum.fields.Name }}</a> 
                        </span>

                        <br>
                        <b>Tanggal : </b> {{ this.date }}
                    </div>
                </div>

            </div>
        </div><br><br>
    </div>
</template>

<script>

export default {
    name: "Card",
    props: [
        "title",
        "desc",
        "url",
        "date",
        "kategori",
        "sumber",
        "attachs",
    ],
    data() {
        return {
            carouselimg: 1
        }
    }
}
</script>

