<template>
    <div>
        <section class="hero has-background-info">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-white">
                        Cek Fakta Covid-19
                    </h1>
                    <h2 class="subtitle is-6 has-text-white">
                        Total: {{ articles.length }} post
                    </h2>
                    <br>
                    <br>
                    <br>
                </div>
            </div>
        </section>

        <section class="container">
            <div style="margin-top:-100px">
                <div class="columns">
                    <div class="column">
                        <div class="card has-text-left">
                            <div class="card-content">
                                <div class="field">
                                    <strong>Filter</strong>
                                    <div class="control">
                                        <input class="input" @input="filterData" type="text" placeholder="Cari Fakta / Hoax">
                                    </div>
                                    <br>
                                    <div class="control">
                                        <div class="select">
                                            <select @change="filterKategori">
                                                <option value="">Kategori</option>
                                                <option v-for="kat in categories" :key="kat.id" :value="kat.id">
                                                    {{ kat.fields.Name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card has-text-left">
                            <div class="card-content">
                                <h2>
                                    Ayo bantu kontribusi untuk menyebarkan berita - berita yang benar kepada keluarga terdekat kamu.
                                    Apabila kamu menemukan berita hoax dan mau mengklarifikasinya, kamu bisa mengirimkan surel kepada kami melalui email <a href="mailto:iniakunhuda@gmail.com">iniakunhuda@gmail.com</a>.
                                    Kami akan memposting berita tersebut di halaman ini. <strong>Mari bersama lawan HOAX</strong>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <br><br>

            <div v-if="articles.length > 0">
                <Card v-for="article in filteredArticles"
                    :key="article.id"
                    :title="article.fields.Judul"
                    :desc="article.fields.Text"
                    :url="article.fields.URL"
                    :date="article.fields.Tanggal"
                    :kategori="article.fields.KategoriLabel"
                    :sumber="article.fields.SumberLabel"
                    :attachs="article.fields.Attachments"
                />
            </div>
            <div v-else>
                Data not found
            </div>
        </section>

        <section class="container has-text-left" v-if="articles.length > 0">
            <h3 class="title is-5">Sumber Data :</h3>
            <ul>
                <li v-for="sumber in sumbers.filter(i => i.fields.Name != 'Tidak Diketahui')"
                    :key="sumber.id"
                >
                    <a :href="sumber.fields.URL" target="_blank">{{ sumber.fields.Name }}</a>
                </li>
            </ul>
        </section>
        
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import { AirtableAPI } from '../services/AirtableAPI';
const airAPI = new AirtableAPI();

import Card from './Card.vue'

export default {
    name: "Articles",
    components: {
        Card
    },
    data() {
        return {
            articles: [],
            filteredArticles: [],
            categories: [],
            sumbers: [],
            search: '',
            searchKategori: '',
        }
    },
    methods: {
        async getData() {
            await airAPI.getTable('Kategori').then((data) => {
                this.categories = data;
            })

            await airAPI.getTable('Sumber').then((data) => {
                this.sumbers = data;
            })

            await airAPI.getTable('Artikel').then((data) => {
                let that = this;
                data.forEach(function(r) {
                    let obj = r;
                    obj.fields.KategoriLabel = [];
                    obj.fields.SumberLabel = [];

                    r.fields.Kategori.forEach(function(id) {
                        let filter = that.categories.filter((el) => {return el.id == id })
                        if(filter.length > 0) {
                            let kategori = filter[0];
                            obj.fields.KategoriLabel.push(kategori);
                        }
                    });

                    r.fields.Sumber.forEach(function(id) {
                        let filter = that.sumbers.filter((el) => {return el.id == id })
                        if(filter.length > 0) {
                            let sumber = filter[0];
                            obj.fields.SumberLabel.push(sumber);
                        }
                    });

                    that.articles.push(obj);
                    that.filteredArticles.push(obj);
                });
            })
            
        },

        filterData(event) {
            this.search = event.target.value;
            this.filter();
        },

        filterKategori(event) {
            this.searchKategori = event.target.value;
            this.filter();
        },

        filter() {
            this.filteredArticles = this.articles.filter(post => {
                if(this.searchKategori != "") return post.fields.Kategori.includes(this.searchKategori)
                else return post
            })
            // search judul & text
            this.filteredArticles = this.filterMultiple(this.search, this.filteredArticles, ['Judul', 'Text'])
        },

        filterMultiple(search, data, keys) {
            var lowSearch = search.toLowerCase();
            return data.filter(function(r){
                return keys.some( key => 
                    r.fields[key].toLowerCase().includes(lowSearch) 
                );
            });
        }
    },
    mounted() {
        this.getData()      
    }
}
</script>
