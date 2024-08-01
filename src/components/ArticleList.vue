<!-- <template>
    <div class="p-4">
      <input
        v-model="keyword"
        @input="filterArticles"
        placeholder="Procurar"
        class="p-2 border rounded w-full mb-4"
      />
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ArticleCard 
          v-for="article in filteredArticles" 
          :key="article.url" 
          :article="article" 
          @selectArticle="selectArticle" 
        />
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, defineEmits } from 'vue';
  import ArticleCard from './ArticleCard.vue';
  import newsService from '../services/newsService';
  
  interface Article {
    url: string;
    urlToImage: string;
    title: string;
    content: string;
  }
  
  const emit = defineEmits(['selectArticle']);
  
  const articles = ref<Article[]>([]);
  const keyword = ref('');
  const filteredArticles = ref<Article[]>([]);
   
  const fetchArticles = async () => {
    try {
      const articles2 = [
  {
    "status": "ok",
    "totalResults": 33,
    "articles": [
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "UOL",
            "title": "Chefe de Direitos Humanos da ONU pede que Venezuela respeite direito de a população protestar - UOL",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxOQVJzQWM5WGJqOWNaaDVMQ3ROal9DSERpQzBjRTNUNXdtSmlsNlBKUTZOcEJfemFHZFZGVW1fWEdXOERXUGkwV0JnekQ3RlYyRmV2eTlGT19UWVZoMU9USmZ0cmlVelFQb012YVNVZlhQYUhnN3RRcGJHR3BDS0RIbE9fVXkxV09OenlHN0J5WUxDWWpEdVB2dG5PTGVOV0xoVUJ2eFhlVGlzUTdrbjVNODgyOGx3ZVgwaks3ZWxSVFhkQ0VCSG5YQnV2Zy10Y0pRMmdxbUxwd3lJWnPSAeABQVVfeXFMTUtZOUlfY1NuMlpJYndYLTNrRGFJUHhKYjRFVi02R2VtSGxGdW1hTWpyUXBnZ3o4R1lTTzhtR0dHNWIxTGt6XzhyZnNMX1pqdUNBVUlzLURQY3pzU1I4Q3F6VXZvZjNfMUY3WmxvcUhEMnBXYjZ1eUJzUFA2SGR1X3JIcjdTYTFTZGpOVFk5dXR0M1FVSENIWkpkbTEtbkMzUnl6YkFzRmpqdUpqWHJ3RTRjUk5sa2swZ0JMRTE4VklRUHhuR3hFS3hyZ19nNXl4RnMyRW5Yc1VybkdaM0tGSms?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T20:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "UOL Confere",
            "title": "José Roberto de Toledo: Brasil pede e Venezuela evita invasão de embaixada argentina - UOL Confere",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQdS1XYlVKQmNKcmtZNTR2TkduTlV3MFV0R3Z6TTBoSlRINHlaWlNnQjlsSHp4Y1ZtclNHWHVsT0JsZ001TDBWVHNWSEdfSTMwUVg4aUdEZGZGSlZFTmZ1NFJEeXRmbV9qNC0weS1PUHBlbUxnN2cwZE1lNmdXQzhHV0VVYUVBMGw0T3pTYzNEeEdXTWtwVEJkUXBxYUNGTDloZE9FUUFkSmpDaENDaV9USEJoMEQ3NmtDOUxVX1pxbUJVZ1NCV1UwSVYwU3N5RUE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T19:39:05Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Contigo!",
            "title": "Após polêmicas e acusação de fraude, Globo não renova contrato de Davi Brito - Contigo!",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxONC1PRGhiRUZ1TzNhZ0pKQUdQbDNXVFdpNkZBMXJhUklzTjNuTkh6YlNVb3E0Z2NVa29QUEJlclVYeVVkT0xUQ2NnM3VNR1lCd0pSX2ZINmMxQk9fUU5zZDhXeXZGd2NwNlJZcE5oU0lyU2pBNldYX293blo5Z2NnRllYMEJLdkg3SDV5TFZWMUtqMGJUSlVIUjJLRmdtdEppRU1hQkt0ajY2UVhsWGpmYi1jcWRMc2VI0gG-AUFVX3lxTE9DNmFFSVg3SXZRYkRPTEFyWmx5RkIzNk9XRjVTQllaVEN0cE1xUUZQSHk3dkVLZ3ppSll1WXExQmNaZjY1RTkxUWxoME5oNDdCMzBRQ2liUDVuZkxfSTVpLUUxcURUVldNeFdhdExobThvUEcwME9EOXBHbG1mc1pSU1RsZ3ZfbXdyNy1uUnNRdjg5UnRRdUZSY3d2VUZQM2x5ZzhuUnk1dDB5Z0ZpZFBXUVVtaXRJUW9UZzdJSFE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T19:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Meu Timão",
            "title": "Corinthians envia ofício à CBF contra a escolha do árbitro para o confronto com o Grêmio; veja mais - Meu Timão",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxNYnpIOVZSaEpaaGVWN195Vk9sVDA4YUVvQTltRndSR1ZlSmR2LTBpeUhLQVdTcjdXV3lKdDZJaGx0TWdnVlZGcm1laDFaSUxNbDVxUUdWY19SVjFCeE13REZxT1RNZDJzNUZZZVU5cU5fckcyZzJXd0ZrTVBzcGRfR1pVeExRNVhVMUdJcGtvUjFLNmM5NmcweV85c1BtS0VwcTBNLURuZ0oyU0hndXRqQmpJcFBWUC1lcEliTlFUUjhYSlUzamdtcWwya2FWNzlRWVJWLUhrTW1JOXZ0S3ZfbzQ5TlFLSzNvVkhkeTFB0gHeAUFVX3lxTE9mR09ubjhFcHpSR0JXb1c4MVRTaUUwZ2VoN3hRZjRKMUZsN0t6WXowWmRZVmJrUVA4eTZIanpNczZKLVRKRzIwUEtyc0lrbVNOeUpyclJpSWQweHNEUUEzRms0SEtjRUN6ZGU2V1dFV2N1YnlpcXZGZTdWMEV5Q1RnUV81WUw3OG1fd25NYWd0VU9ONkkycVJQSXVwU0dWY0Q0bGZDb3ZObjNtbHRvdEdNZEJwTWZucDFieFdpQTc3WmFFSnNEWXphd3hrbkk1UDFDNXM1WWVYZHg4MEJSZw?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T19:22:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Passageiro de Primeira",
            "title": "Amazon oferece cupom de desconto de até R$ 100 para clientes que participarem de um quiz - Passageiro de Primeira",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNWDNkMzJQNmoydVkxQ1VQTjJjZ3VSVi03bzRQMTJOSWNRWFdhamFsaFZRbjR4S0RRdHREa0JGR1VlZi16d0NaeURYaGlZWEtnLWpiZVJzX3VoSWhPYXhOanV1YnVoOE5lM09ZTTN2MkdEWFI5b1Vsdk1mQVF1YmJsVXFrNzV4V0ZkVHpwTkZYQjBxUXdDbkRSNlRpYy1uaWN6eWh3R2FIZkRqZ3pUZk5YQ1lad3dXOXF3cGZWZ0hB?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T19:05:58Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "ESPN.com.br",
            "title": "Fim da linha: São Paulo e James Rodríguez rescindem contrato - ESPN.com.br",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOWlZhWnlvNHM2S3otcmhJa2hnREZfRlVadHc3S0tsbnduQnZNejdVLUEyMlFCdXNMcFNfVGRVNnROTXNWT2s3S2lBaFdBZWZxbVYwTTZlWDY5Vms0SXBVM1FWZS1scXYtMjFBdW4wZXFIZmxjOUJMUjZJLVRBTF95NVZMWFVlZ2k2TkVaZ2F1SXBzS05sbHBGTGR6cWlkT0U1UXZFNmhHZ3N6RXcyVEE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T18:43:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Poder360",
            "title": "Caixa vai aderir ao ProCred 360, voltado a microempreendedores - Poder360",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOeUpGVEhpallNTTdTWXl1Q0dTWTN5dWF1Nk03R1A1S293eFlJcFZwbm1mSDN5Zkl3NkNsQjJpbzlmT19ZdmNqbHlyMXFXTTlkMlhmWEtzWVdnRTUwUXpnQlBFdTVYc1hlOVVlLXlmeTU5ejVxYThsYmJYU1RlakhwLVpPdG84RGNXNVVDQUNyZTdOclVuY2piVzdRYmd4VEU?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T18:28:33Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "AEROIN",
            "title": "Já tem data a reinauguração do Museu Asas de Um Sonho, o antigo Museu TAM, agora em Itu (SP) - AEROIN",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQc0VQdWJ6c3h6NDVmVndraGFfdVdHWmo0WWRocDRVSXVxX1J6cmNycXlfYXNFejFnZXhLbjNhbVl6enVoQzZCeFAwcTQwMVNlVzhTS2R4bWJSQXNsT1Juc2s1TWFSYllmaGlPVU5MNlMweG11YzBpR3pXdWVIanRERWJjNUJvVVRFQmZoaUFOLXJEaVpXXzZ2S0RWZDdZQ190LTBJUjUwTS1YbUlV0gGsAUFVX3lxTFBzRVB1YnpzeHo0NWZWd2toYV91V0daajRZZGhwNFVJdXFfUnpyY3JxeV9hc0V6MWdleEtuM2FtWXp6dWhDNkJ4UDBxNDAxU2VXOFNLZHhtYlJBc2xPUm5zazVNYVJiWWZoaU9VTkw2UzB4bXVjMGlHeld1ZUhqdERFYmM1Qm9VVEVCZmhpQU4tckRpWldfNnZLRFZkN1lDX3QtMElSNTBNLVhtSVU?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T18:28:17Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Globo.com",
            "title": "Com sangue, suor e brilho, Brasil é bronze por equipes na ginástica nas Olimpíadas 2024 - Globo.com",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxPRjAyVUc0VjVpMjlyWExsRFprb3Z0Mk1nTkJrQ3JXcEh2WDlBWU1hVDQ1NXFjLXU0QnZRTFpzU1YwX2l6VmNaeUtKRkZ3cUpmVmtXbzRTSUFkRWRkcjVoa1pETmRENHQ5Z0RyOWZSS1E0ZUlPUGZyV3UyY002aXFMLXh6eGlHZ1ZkRmQwak5nZFpVQjZFbHI3SUNBSHpIYm1EdTRESkNpdlpmN2xJRG13eUlON1hZNzhwalVva1pvcF83OVZ6R1BHWVpxSmRVZFZDV2lySFY5NHVsd9IB6AFBVV95cUxNUHVYdXJsUGZNV3lEcUdyOTdncGNmUmYxMmxFLVBJSVZZMmppWlE4WmlYTTVuYmlrMmcxQWFCRm5CR0ctSXNHVm9kVUpOblZLWnk0MGRYMDN0WlBzQllVeDBuRVVEWGVSaFlMcWdEeXRLU25FR3QxSm52d29iOElaWkhkcHVPbVJqUHF4dUF1YngzbVdFaFBGNzEyQzZFcjkwMUxVazR0eVFWXzZkOG5VM25YSjBYUzA3VDF4N0YtSDFRZjZ5cVhkNVBCNlI4a1k5MWFfVi0xdWRWQ2JjTjcxM092MWxtRjNO?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T18:18:54Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Extra",
            "title": "Ana Paula Arósio reaparece em nova campanha e fala de afastamento da TV: 'Segui a minha essência'; assista! - Extra",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQbVdfcGhxcU1jOFppVk1nYTljUWpjTXAyYW9xdTQwNFB5R0V4elVTeEZRZTZMdW05bnpSNFNBN0RUZDd2TkpucEs5ZDB3N1NEUkpjUk1yUXNxOVUtNUxVbmVIZXVoT2ZYbldZVkE4MkVCZldBVFhWTDlsQkpwZ2QtemFmV29yc2dOamlhNHlvXzhwcVNTemdZSFhOb29OdURrX3FIZThGZFM1RWJTUnR0bmdjTmI3TlFmbkpzS2dIdkcyNFZRY2RFWE9XUTlmNC1Sblc0YlZ3MjZVTGZreklIctIB7wFBVV95cUxQWUs0MDlId1NnQUVXcTNQY0NXTkUwR1ZTUkNkZUtIeVozVHhmbnA5OS0wQXBVbi1yLUdVb0w3YUQyanEyQnB2Mk9LcFZhcVY1aTlzYmVUbnFjS3pzSnhLcG5FSU1uQWNsWVlOVDhUQkE1dXlsS19UNUF4VFFObUI2aGs4YVZzNjdUSElhdEhVSnhxeDAwUHhvTmFPS0s5QV9NVnJXZHJCM0dsLU5hQmJnVTVzTlZMOXRvOHQwaVFscnJEZzdQT0pHdnJteWh4Nk51bE5QeDFNeXN2ZmNCZkdLT0ozNFlwQllucEhvQ1hmTQ?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T17:32:15Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "G1",
            "title": "Criação de empregos formais soma 201,7 mil em junho, com alta de 29,6% - G1",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNRFdCRGZGNXVZcldsNHo0dDdQU25MRTJFVzlOMXhheEJTSFpWLXM0X21Bbjgtdnd1dWJOM0NTc2RGRVhwQmw1WVpuSVF0cjBteXAxRWYtUkJ2ajA5U2QtbGVnMlFwTmZhdlhiUGNyem5FSEVDTTVYZEhMX2w5ZzdVamRYMjRZZ1NHVUt6Q05EOXppU0UyN1Y0YzdGenBFbjY3ZUpyNUcxTlNlcXBBX1ZLNU5BM01FOE9tN21lU2VCSzRPNkF6bXkw0gHWAUFVX3lxTE0wYk4tUjR2QjFMd1NsU2RhNFZ5NUhLam1tUXV4S1FqNlc1VUNuT1pHX05VcDdaTVA3X3BudDM0U1N5Y1l3VGlPME1KT2FGQXAtcWNWMXRRNm1HanMyaHZtVjlZMkE2cTZ1NThXQlpkdjRRaUd0dDZvQnFJbEJybDVGamJ2bGxyMjVqUnkyUmZwU2VtWkVTdHVIZlo0NHR1Q2FLY0xMVXFINGRySUhkRGJoeTd4UnM4djF2ZU54RlJpQ3VSUHN6b3AxdXV6blNfY1JHTjVpdVE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T17:31:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "G1",
            "title": "Israel bombardeia Beirute, no Líbano, e diz que alvo era comandante do Hezbollah - G1",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPZHVkcmU3a01nYkl2ekg0QnJXdzQ5TDg3ZUttTV84eUoweEFDcDdDRUFIS1ljcVRnSXFCakdkaEVxdEc4bHlrdEVhdWxqUHdOcU9qMXBoWGFJQTFJUlEzUkRHdHQ5dUtpaGotdUxqX0UwMlV3bjlFb3FQV1czQ0I0cEhDVXNSOGR6bmhMenI2d3RwUzZ0aXBuRmlsSFNhMGhqWEJOV3RZZE4tbWJrMkhGa3RuakY2dldrS2pBMGdPOFE5QjJ3Tk9GUkpsb01GVFhSS3MzS3Bn0gHkAUFVX3lxTE05UDdlSjZERjduRkd6QVJnSElTXzJWZ1p5X0FNSE1YeEJnWnFRUG9WZmQ1cWVpR1pjamtPWGlDdERvTkdtNnlTaVZxdG92Umo3WHNzNlJmNWM1ZFBsRmxyYk9WSl95cUgzWVZCbzJzV2l6cm5NVzJndVRCSVU2QnpaMEtRWExnQ1VGS3I5N2NWbGVTNzRXZTYzWS1pdWg4eVFVTXNkUGtFZHFNZThYbGd1bmJWQndnY051WnJzX2NuVm5qWVlyUElTYy1pOElQVXhjYXYzVnBWRUY1WFJ3cU1zanVTZQ?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T17:05:02Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "TudoCelular.com",
            "title": "Carteira do Google recebe integração com Pix para realização de pagamentos - TudoCelular.com",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPXzlNanpBN1ZiSFNmUWJMR0dDQlBzQ0w5WkViNDR4RGdlQVFuajFiZTlGaVpFRU5DZUIzMXBpUmxudmZTT2J4czIweXFpZDFVT19uWTVfTGo5MW1MM2RsRC1ma2VTV0l1OVpDZlZOemc2TjlONnVEZkFtcktiUVhYVENkVGo1VXVmYlQ4MExzVUsxOEtQdDEzMTROd3p4eWs?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T16:46:57Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Poder360",
            "title": "Protestos anti-Maduro deixam mortos e feridos na Venezuela - Poder360",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOZS14X0pxS1ZUM1BUTE93OVFhYUpDaTNvUTE5dUFWMzQ3WXVLaXp1NUNtU2k3S3lNdjdYSklObDJtZlBBR1RGTThvYlpmcWVuSXVwQ3ZTNHhCTHVvVkJjNF80b2I3NWIxZjhnUUdzSjI4Ylp4NHVtTEd0SjdkR18teGZ0TkplTFJIZWRlLUozYXFwRjJfVWVmVjVNekxCQkppSlhNSTRZUnVUNmc?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T16:03:23Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Poder360",
            "title": "Talíria diz ser vítima de ameaça e manda recado: “Não vamos recuar” - Poder360",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNZld0XzZxYjNHcEJhU1BVSlJ0WjNLcmlUYnpfR2phSVkyaHBYOGtHeDJHZHcxejlVX25lNnEwN1hSeUJxc0RfN0VDSHI2Q1hPZEIwMXFQejFiVllrbkZoV00zbll2Qkw1c25iS3lyRktBVm1rbHVWOGVteDJXZ1VUVnRWbVRGWUxUTVIwd0NFelJYY2FSWEZDZENxU1FFNVN2ZXVFUFl5UU1HSTE4QlE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T16:00:52Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "SBT",
            "title": "Morte por coqueluche: Ministra da Saúde pede para que crianças e gestantes se vacinem; entenda - SBT",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNRG1HNDNDMkdSRER3WmVWeEZsVUZaNThnUktya0xZdy13S3VUR0dvb05wMVBBenVWYzNwOGdFVUVNSUo5T1VuVHVZZW9ZcVlmcXJjRVNnRDM0UVNsRHIzOVo1Z1dNaTY2NHktLVNuc3hNMlVhQkc3OGJqVFdneThtd3doR284ZXVmQVYzSks4OHJFemZMU2RuX29WU2ZiVHRPc2xzY0IwamtBSllvd0RrenE5X1p1RWMyQllRZ0NUWjB2Q3BBTFJsLUhMM0tJTU9t?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T15:58:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "O Antagonista",
            "title": "Copa do Brasil: Botafogo e Bahia se enfrentam por vaga nas quartas - O Antagonista",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOVVl5U25uRUotbFEyMlhBdjZBTmZVdXhCVVh6UGdJdEkyQ1lvamJiQWhreFR6bFVKdUZabW53ODZHUXZTMUVSV3NQRlkzZ1JXYnVoSGpQT05RRWxzTlBPbEgyQnVtcVBQZWNxTTJLRDFFWW16R1o4Yy1vOUpfei1qXzRRTVFfcXFxSjJKc1c3WXFVcm90WTlIUU5NSkt6aklFOTVCUDhR?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T14:19:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Metrópoles",
            "title": "Morre 3ª criança esfaqueada em aula de dança inspirada em Taylor Swift - Metrópoles",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOUDFxaDNjRTJtNHVmU2hZVmhrQ2xFRzBGLWZzNVo2ZXdEcUZPdEFySkFkU0xFUDF0dzB4VzdySEhudlRvQVFEOTJRNXN3cFZyaEJhOUVCajBBZHVsME83VEdFZHIwZG40T1F3QzZmM2Q5MXNKUXVmeHRNM1ctZHJoSUk4VlFIODVoS3ZzZHZJX3UxSGxfXzN3RHJyUWN1VHA3el9RT1ZR?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T13:55:42Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Correio Braziliense",
            "title": "Nadadora australiana testa positivo para covid-19 e desiste da prova dos 1.500 m - Correio Braziliense",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNdlV3Y2FwUURjNzN4RUdTd3VZYXRycVg4YnNLdUxmaWNOVlRjRzV5MEZtMlJIRTJhVDEyN3lKT3h3aGVVdVBQdFlDMlZDT0EyTDRvZjJMUXNTRHRPSFZCZmQ4UFhTZkpKZW10T3dLM0Z2ZC1tdGEwbm5hZkdxWU5oVTJ4WEM0cUd4ZDluVU9FMXBlbWpWVmRCYjJhMGJHaHpFWm4zMzkyeFFrbU11czFKWDQ3ME5IemhxaWlBdmg2UTZzbXNINTBkLWNqUTVwc0h4V1pjUGtsSmNKQ3Y0T3NZZi130gHnAUFVX3lxTE1KZkF3d3E4MGdQLVdlMURhazhoS3hmOHpOYm5sNmhMUUdpVGJibm84UGlxbzREWHJGTVJuMFNmR2NsNVNNa1VGNThMcE1LSXNnd2xQVmFGZmFkVldFNTR3VmNNRXV1MWt5UU5LYnN4dTRhVlN2dm9zZWRCMWZOMU1qQ2hmQnh3bS0yQUdoMWRCbnpFbWtOSzh2Y0dBQ05NcUhWWmo0RXdfdHNoLUpJcjNoRXFCaDdXbmpMeGFFYmF2TmhIVWpNR0lXSHVIeHVSeURFXzBoX3M5SjJ0cHIyRmxaU2NITXVzdw?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T13:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "UOL",
            "title": "Liraglutida tem bons resultados contra declínio cognitivo por Alzheimer em estudo - UOL",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxQWXpNNHF3aG0tc1lZc25sTkVrLWVMVUNwUExUWnA5UDJZb1JHbVJTZmw2WVdwZTBJVFdoSld6S0Y5dVQtb2tKY2ktUDY5alhRTkpMUGVVSlpOT2VCLXVaeVlzZGNBZXpsWnN4U01rQVY1Q0JTaFlwMUsyOVV0SFhIM3VzTWI1VDBpSUVTS2hlYlp4ZVZHQzJCaDVVMFIyS2dhbExydExDYUNKakVIUzJZTDV0QllnVVhxdXdBZ1hzaEFMbzNoS2tIOFowLWNMWmpVX2dZR01NSVVRSlBzeFR0QjlQM3ZBNXhX0gHuAUFVX3lxTE9WLU5RUTU2X2IyUFRiOEx4M3lLck0yVXZvb1l3c2VJYlUyRXhIVDRMcFhTU1EzS0FuWGxJcUdBd0o5ZUlZWEtuV1E5czUxOWVITnJOekNPYjJwc3hSR09uM1RvNTdsX3AxWEdISGlsZEpoN2xENnQ3cy1SZTV2YjlFX1hKX2FXTkt6YnBVTEpzOTF0ejE1OVo3X2V1MF90RnZkd05JMlZ6WDQ4bmJyNnowLW5wbzRXRnlodmpkU2FjSFluZ3FOWnZFSEZqek1lWWlPQUp4NUJoX1dmRVZFck5JN1VLc3JNNFlLWmdYUlE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T12:45:00Z",
            "content": null
        }
    ]
}
  ]
      // const response = await newsService.getTopHeadlines('br');
      // articles.value = response.data.articles.slice(0, 10);
      articles.value = articles2.value;
      filteredArticles.value = articles.value;
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
    }
  };
  
  const filterArticles = () => {
    if (!keyword.value) {
      filteredArticles.value = articles.value;
    } else {
      filteredArticles.value = articles.value.filter(article =>
        article.title.toLowerCase().includes(keyword.value.toLowerCase())
      );
    }
  };
  
  const selectArticle = (article: Article) => {
    emit('selectArticle', article);
  };
  
  onMounted(fetchArticles);
  </script>
   -->

   <template>
    <div class="p-4">
      <input
        v-model="keyword"
        @input="filterArticles"
        placeholder="Search by keyword"
        class="p-2 border rounded w-full mb-4"
      />
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ArticleCard
          v-for="article in filteredArticles"
          :key="article.url"
          :article="article"
          @selectArticle="selectArticle"
        />
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, defineEmits } from 'vue';
  import ArticleCard from './ArticleCard.vue';
  
  const emit = defineEmits(['selectArticle']);
  
  const articles = ref([]);
  const keyword = ref('');
  const filteredArticles = ref([]);
  
  const articles2 = [
  {
    "status": "ok",
    "totalResults": 33,
    "articles": [
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "UOL",
            "title": "Chefe de Direitos Humanos da ONU pede que Venezuela respeite direito de a população protestar - UOL",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxOQVJzQWM5WGJqOWNaaDVMQ3ROal9DSERpQzBjRTNUNXdtSmlsNlBKUTZOcEJfemFHZFZGVW1fWEdXOERXUGkwV0JnekQ3RlYyRmV2eTlGT19UWVZoMU9USmZ0cmlVelFQb012YVNVZlhQYUhnN3RRcGJHR3BDS0RIbE9fVXkxV09OenlHN0J5WUxDWWpEdVB2dG5PTGVOV0xoVUJ2eFhlVGlzUTdrbjVNODgyOGx3ZVgwaks3ZWxSVFhkQ0VCSG5YQnV2Zy10Y0pRMmdxbUxwd3lJWnPSAeABQVVfeXFMTUtZOUlfY1NuMlpJYndYLTNrRGFJUHhKYjRFVi02R2VtSGxGdW1hTWpyUXBnZ3o4R1lTTzhtR0dHNWIxTGt6XzhyZnNMX1pqdUNBVUlzLURQY3pzU1I4Q3F6VXZvZjNfMUY3WmxvcUhEMnBXYjZ1eUJzUFA2SGR1X3JIcjdTYTFTZGpOVFk5dXR0M1FVSENIWkpkbTEtbkMzUnl6YkFzRmpqdUpqWHJ3RTRjUk5sa2swZ0JMRTE4VklRUHhuR3hFS3hyZ19nNXl4RnMyRW5Yc1VybkdaM0tGSms?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T20:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "UOL Confere",
            "title": "José Roberto de Toledo: Brasil pede e Venezuela evita invasão de embaixada argentina - UOL Confere",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQdS1XYlVKQmNKcmtZNTR2TkduTlV3MFV0R3Z6TTBoSlRINHlaWlNnQjlsSHp4Y1ZtclNHWHVsT0JsZ001TDBWVHNWSEdfSTMwUVg4aUdEZGZGSlZFTmZ1NFJEeXRmbV9qNC0weS1PUHBlbUxnN2cwZE1lNmdXQzhHV0VVYUVBMGw0T3pTYzNEeEdXTWtwVEJkUXBxYUNGTDloZE9FUUFkSmpDaENDaV9USEJoMEQ3NmtDOUxVX1pxbUJVZ1NCV1UwSVYwU3N5RUE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T19:39:05Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Contigo!",
            "title": "Após polêmicas e acusação de fraude, Globo não renova contrato de Davi Brito - Contigo!",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxONC1PRGhiRUZ1TzNhZ0pKQUdQbDNXVFdpNkZBMXJhUklzTjNuTkh6YlNVb3E0Z2NVa29QUEJlclVYeVVkT0xUQ2NnM3VNR1lCd0pSX2ZINmMxQk9fUU5zZDhXeXZGd2NwNlJZcE5oU0lyU2pBNldYX293blo5Z2NnRllYMEJLdkg3SDV5TFZWMUtqMGJUSlVIUjJLRmdtdEppRU1hQkt0ajY2UVhsWGpmYi1jcWRMc2VI0gG-AUFVX3lxTE9DNmFFSVg3SXZRYkRPTEFyWmx5RkIzNk9XRjVTQllaVEN0cE1xUUZQSHk3dkVLZ3ppSll1WXExQmNaZjY1RTkxUWxoME5oNDdCMzBRQ2liUDVuZkxfSTVpLUUxcURUVldNeFdhdExobThvUEcwME9EOXBHbG1mc1pSU1RsZ3ZfbXdyNy1uUnNRdjg5UnRRdUZSY3d2VUZQM2x5ZzhuUnk1dDB5Z0ZpZFBXUVVtaXRJUW9UZzdJSFE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T19:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Meu Timão",
            "title": "Corinthians envia ofício à CBF contra a escolha do árbitro para o confronto com o Grêmio; veja mais - Meu Timão",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxNYnpIOVZSaEpaaGVWN195Vk9sVDA4YUVvQTltRndSR1ZlSmR2LTBpeUhLQVdTcjdXV3lKdDZJaGx0TWdnVlZGcm1laDFaSUxNbDVxUUdWY19SVjFCeE13REZxT1RNZDJzNUZZZVU5cU5fckcyZzJXd0ZrTVBzcGRfR1pVeExRNVhVMUdJcGtvUjFLNmM5NmcweV85c1BtS0VwcTBNLURuZ0oyU0hndXRqQmpJcFBWUC1lcEliTlFUUjhYSlUzamdtcWwya2FWNzlRWVJWLUhrTW1JOXZ0S3ZfbzQ5TlFLSzNvVkhkeTFB0gHeAUFVX3lxTE9mR09ubjhFcHpSR0JXb1c4MVRTaUUwZ2VoN3hRZjRKMUZsN0t6WXowWmRZVmJrUVA4eTZIanpNczZKLVRKRzIwUEtyc0lrbVNOeUpyclJpSWQweHNEUUEzRms0SEtjRUN6ZGU2V1dFV2N1YnlpcXZGZTdWMEV5Q1RnUV81WUw3OG1fd25NYWd0VU9ONkkycVJQSXVwU0dWY0Q0bGZDb3ZObjNtbHRvdEdNZEJwTWZucDFieFdpQTc3WmFFSnNEWXphd3hrbkk1UDFDNXM1WWVYZHg4MEJSZw?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T19:22:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Passageiro de Primeira",
            "title": "Amazon oferece cupom de desconto de até R$ 100 para clientes que participarem de um quiz - Passageiro de Primeira",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNWDNkMzJQNmoydVkxQ1VQTjJjZ3VSVi03bzRQMTJOSWNRWFdhamFsaFZRbjR4S0RRdHREa0JGR1VlZi16d0NaeURYaGlZWEtnLWpiZVJzX3VoSWhPYXhOanV1YnVoOE5lM09ZTTN2MkdEWFI5b1Vsdk1mQVF1YmJsVXFrNzV4V0ZkVHpwTkZYQjBxUXdDbkRSNlRpYy1uaWN6eWh3R2FIZkRqZ3pUZk5YQ1lad3dXOXF3cGZWZ0hB?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T19:05:58Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "ESPN.com.br",
            "title": "Fim da linha: São Paulo e James Rodríguez rescindem contrato - ESPN.com.br",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOWlZhWnlvNHM2S3otcmhJa2hnREZfRlVadHc3S0tsbnduQnZNejdVLUEyMlFCdXNMcFNfVGRVNnROTXNWT2s3S2lBaFdBZWZxbVYwTTZlWDY5Vms0SXBVM1FWZS1scXYtMjFBdW4wZXFIZmxjOUJMUjZJLVRBTF95NVZMWFVlZ2k2TkVaZ2F1SXBzS05sbHBGTGR6cWlkT0U1UXZFNmhHZ3N6RXcyVEE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T18:43:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Poder360",
            "title": "Caixa vai aderir ao ProCred 360, voltado a microempreendedores - Poder360",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOeUpGVEhpallNTTdTWXl1Q0dTWTN5dWF1Nk03R1A1S293eFlJcFZwbm1mSDN5Zkl3NkNsQjJpbzlmT19ZdmNqbHlyMXFXTTlkMlhmWEtzWVdnRTUwUXpnQlBFdTVYc1hlOVVlLXlmeTU5ejVxYThsYmJYU1RlakhwLVpPdG84RGNXNVVDQUNyZTdOclVuY2piVzdRYmd4VEU?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T18:28:33Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "AEROIN",
            "title": "Já tem data a reinauguração do Museu Asas de Um Sonho, o antigo Museu TAM, agora em Itu (SP) - AEROIN",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQc0VQdWJ6c3h6NDVmVndraGFfdVdHWmo0WWRocDRVSXVxX1J6cmNycXlfYXNFejFnZXhLbjNhbVl6enVoQzZCeFAwcTQwMVNlVzhTS2R4bWJSQXNsT1Juc2s1TWFSYllmaGlPVU5MNlMweG11YzBpR3pXdWVIanRERWJjNUJvVVRFQmZoaUFOLXJEaVpXXzZ2S0RWZDdZQ190LTBJUjUwTS1YbUlV0gGsAUFVX3lxTFBzRVB1YnpzeHo0NWZWd2toYV91V0daajRZZGhwNFVJdXFfUnpyY3JxeV9hc0V6MWdleEtuM2FtWXp6dWhDNkJ4UDBxNDAxU2VXOFNLZHhtYlJBc2xPUm5zazVNYVJiWWZoaU9VTkw2UzB4bXVjMGlHeld1ZUhqdERFYmM1Qm9VVEVCZmhpQU4tckRpWldfNnZLRFZkN1lDX3QtMElSNTBNLVhtSVU?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T18:28:17Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Globo.com",
            "title": "Com sangue, suor e brilho, Brasil é bronze por equipes na ginástica nas Olimpíadas 2024 - Globo.com",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxPRjAyVUc0VjVpMjlyWExsRFprb3Z0Mk1nTkJrQ3JXcEh2WDlBWU1hVDQ1NXFjLXU0QnZRTFpzU1YwX2l6VmNaeUtKRkZ3cUpmVmtXbzRTSUFkRWRkcjVoa1pETmRENHQ5Z0RyOWZSS1E0ZUlPUGZyV3UyY002aXFMLXh6eGlHZ1ZkRmQwak5nZFpVQjZFbHI3SUNBSHpIYm1EdTRESkNpdlpmN2xJRG13eUlON1hZNzhwalVva1pvcF83OVZ6R1BHWVpxSmRVZFZDV2lySFY5NHVsd9IB6AFBVV95cUxNUHVYdXJsUGZNV3lEcUdyOTdncGNmUmYxMmxFLVBJSVZZMmppWlE4WmlYTTVuYmlrMmcxQWFCRm5CR0ctSXNHVm9kVUpOblZLWnk0MGRYMDN0WlBzQllVeDBuRVVEWGVSaFlMcWdEeXRLU25FR3QxSm52d29iOElaWkhkcHVPbVJqUHF4dUF1YngzbVdFaFBGNzEyQzZFcjkwMUxVazR0eVFWXzZkOG5VM25YSjBYUzA3VDF4N0YtSDFRZjZ5cVhkNVBCNlI4a1k5MWFfVi0xdWRWQ2JjTjcxM092MWxtRjNO?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T18:18:54Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Extra",
            "title": "Ana Paula Arósio reaparece em nova campanha e fala de afastamento da TV: 'Segui a minha essência'; assista! - Extra",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQbVdfcGhxcU1jOFppVk1nYTljUWpjTXAyYW9xdTQwNFB5R0V4elVTeEZRZTZMdW05bnpSNFNBN0RUZDd2TkpucEs5ZDB3N1NEUkpjUk1yUXNxOVUtNUxVbmVIZXVoT2ZYbldZVkE4MkVCZldBVFhWTDlsQkpwZ2QtemFmV29yc2dOamlhNHlvXzhwcVNTemdZSFhOb29OdURrX3FIZThGZFM1RWJTUnR0bmdjTmI3TlFmbkpzS2dIdkcyNFZRY2RFWE9XUTlmNC1Sblc0YlZ3MjZVTGZreklIctIB7wFBVV95cUxQWUs0MDlId1NnQUVXcTNQY0NXTkUwR1ZTUkNkZUtIeVozVHhmbnA5OS0wQXBVbi1yLUdVb0w3YUQyanEyQnB2Mk9LcFZhcVY1aTlzYmVUbnFjS3pzSnhLcG5FSU1uQWNsWVlOVDhUQkE1dXlsS19UNUF4VFFObUI2aGs4YVZzNjdUSElhdEhVSnhxeDAwUHhvTmFPS0s5QV9NVnJXZHJCM0dsLU5hQmJnVTVzTlZMOXRvOHQwaVFscnJEZzdQT0pHdnJteWh4Nk51bE5QeDFNeXN2ZmNCZkdLT0ozNFlwQllucEhvQ1hmTQ?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T17:32:15Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "G1",
            "title": "Criação de empregos formais soma 201,7 mil em junho, com alta de 29,6% - G1",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNRFdCRGZGNXVZcldsNHo0dDdQU25MRTJFVzlOMXhheEJTSFpWLXM0X21Bbjgtdnd1dWJOM0NTc2RGRVhwQmw1WVpuSVF0cjBteXAxRWYtUkJ2ajA5U2QtbGVnMlFwTmZhdlhiUGNyem5FSEVDTTVYZEhMX2w5ZzdVamRYMjRZZ1NHVUt6Q05EOXppU0UyN1Y0YzdGenBFbjY3ZUpyNUcxTlNlcXBBX1ZLNU5BM01FOE9tN21lU2VCSzRPNkF6bXkw0gHWAUFVX3lxTE0wYk4tUjR2QjFMd1NsU2RhNFZ5NUhLam1tUXV4S1FqNlc1VUNuT1pHX05VcDdaTVA3X3BudDM0U1N5Y1l3VGlPME1KT2FGQXAtcWNWMXRRNm1HanMyaHZtVjlZMkE2cTZ1NThXQlpkdjRRaUd0dDZvQnFJbEJybDVGamJ2bGxyMjVqUnkyUmZwU2VtWkVTdHVIZlo0NHR1Q2FLY0xMVXFINGRySUhkRGJoeTd4UnM4djF2ZU54RlJpQ3VSUHN6b3AxdXV6blNfY1JHTjVpdVE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T17:31:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "G1",
            "title": "Israel bombardeia Beirute, no Líbano, e diz que alvo era comandante do Hezbollah - G1",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPZHVkcmU3a01nYkl2ekg0QnJXdzQ5TDg3ZUttTV84eUoweEFDcDdDRUFIS1ljcVRnSXFCakdkaEVxdEc4bHlrdEVhdWxqUHdOcU9qMXBoWGFJQTFJUlEzUkRHdHQ5dUtpaGotdUxqX0UwMlV3bjlFb3FQV1czQ0I0cEhDVXNSOGR6bmhMenI2d3RwUzZ0aXBuRmlsSFNhMGhqWEJOV3RZZE4tbWJrMkhGa3RuakY2dldrS2pBMGdPOFE5QjJ3Tk9GUkpsb01GVFhSS3MzS3Bn0gHkAUFVX3lxTE05UDdlSjZERjduRkd6QVJnSElTXzJWZ1p5X0FNSE1YeEJnWnFRUG9WZmQ1cWVpR1pjamtPWGlDdERvTkdtNnlTaVZxdG92Umo3WHNzNlJmNWM1ZFBsRmxyYk9WSl95cUgzWVZCbzJzV2l6cm5NVzJndVRCSVU2QnpaMEtRWExnQ1VGS3I5N2NWbGVTNzRXZTYzWS1pdWg4eVFVTXNkUGtFZHFNZThYbGd1bmJWQndnY051WnJzX2NuVm5qWVlyUElTYy1pOElQVXhjYXYzVnBWRUY1WFJ3cU1zanVTZQ?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T17:05:02Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "TudoCelular.com",
            "title": "Carteira do Google recebe integração com Pix para realização de pagamentos - TudoCelular.com",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPXzlNanpBN1ZiSFNmUWJMR0dDQlBzQ0w5WkViNDR4RGdlQVFuajFiZTlGaVpFRU5DZUIzMXBpUmxudmZTT2J4czIweXFpZDFVT19uWTVfTGo5MW1MM2RsRC1ma2VTV0l1OVpDZlZOemc2TjlONnVEZkFtcktiUVhYVENkVGo1VXVmYlQ4MExzVUsxOEtQdDEzMTROd3p4eWs?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T16:46:57Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Poder360",
            "title": "Protestos anti-Maduro deixam mortos e feridos na Venezuela - Poder360",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOZS14X0pxS1ZUM1BUTE93OVFhYUpDaTNvUTE5dUFWMzQ3WXVLaXp1NUNtU2k3S3lNdjdYSklObDJtZlBBR1RGTThvYlpmcWVuSXVwQ3ZTNHhCTHVvVkJjNF80b2I3NWIxZjhnUUdzSjI4Ylp4NHVtTEd0SjdkR18teGZ0TkplTFJIZWRlLUozYXFwRjJfVWVmVjVNekxCQkppSlhNSTRZUnVUNmc?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T16:03:23Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Poder360",
            "title": "Talíria diz ser vítima de ameaça e manda recado: “Não vamos recuar” - Poder360",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNZld0XzZxYjNHcEJhU1BVSlJ0WjNLcmlUYnpfR2phSVkyaHBYOGtHeDJHZHcxejlVX25lNnEwN1hSeUJxc0RfN0VDSHI2Q1hPZEIwMXFQejFiVllrbkZoV00zbll2Qkw1c25iS3lyRktBVm1rbHVWOGVteDJXZ1VUVnRWbVRGWUxUTVIwd0NFelJYY2FSWEZDZENxU1FFNVN2ZXVFUFl5UU1HSTE4QlE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T16:00:52Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "SBT",
            "title": "Morte por coqueluche: Ministra da Saúde pede para que crianças e gestantes se vacinem; entenda - SBT",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNRG1HNDNDMkdSRER3WmVWeEZsVUZaNThnUktya0xZdy13S3VUR0dvb05wMVBBenVWYzNwOGdFVUVNSUo5T1VuVHVZZW9ZcVlmcXJjRVNnRDM0UVNsRHIzOVo1Z1dNaTY2NHktLVNuc3hNMlVhQkc3OGJqVFdneThtd3doR284ZXVmQVYzSks4OHJFemZMU2RuX29WU2ZiVHRPc2xzY0IwamtBSllvd0RrenE5X1p1RWMyQllRZ0NUWjB2Q3BBTFJsLUhMM0tJTU9t?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T15:58:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "O Antagonista",
            "title": "Copa do Brasil: Botafogo e Bahia se enfrentam por vaga nas quartas - O Antagonista",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOVVl5U25uRUotbFEyMlhBdjZBTmZVdXhCVVh6UGdJdEkyQ1lvamJiQWhreFR6bFVKdUZabW53ODZHUXZTMUVSV3NQRlkzZ1JXYnVoSGpQT05RRWxzTlBPbEgyQnVtcVBQZWNxTTJLRDFFWW16R1o4Yy1vOUpfei1qXzRRTVFfcXFxSjJKc1c3WXFVcm90WTlIUU5NSkt6aklFOTVCUDhR?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T14:19:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Metrópoles",
            "title": "Morre 3ª criança esfaqueada em aula de dança inspirada em Taylor Swift - Metrópoles",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOUDFxaDNjRTJtNHVmU2hZVmhrQ2xFRzBGLWZzNVo2ZXdEcUZPdEFySkFkU0xFUDF0dzB4VzdySEhudlRvQVFEOTJRNXN3cFZyaEJhOUVCajBBZHVsME83VEdFZHIwZG40T1F3QzZmM2Q5MXNKUXVmeHRNM1ctZHJoSUk4VlFIODVoS3ZzZHZJX3UxSGxfXzN3RHJyUWN1VHA3el9RT1ZR?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T13:55:42Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Correio Braziliense",
            "title": "Nadadora australiana testa positivo para covid-19 e desiste da prova dos 1.500 m - Correio Braziliense",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNdlV3Y2FwUURjNzN4RUdTd3VZYXRycVg4YnNLdUxmaWNOVlRjRzV5MEZtMlJIRTJhVDEyN3lKT3h3aGVVdVBQdFlDMlZDT0EyTDRvZjJMUXNTRHRPSFZCZmQ4UFhTZkpKZW10T3dLM0Z2ZC1tdGEwbm5hZkdxWU5oVTJ4WEM0cUd4ZDluVU9FMXBlbWpWVmRCYjJhMGJHaHpFWm4zMzkyeFFrbU11czFKWDQ3ME5IemhxaWlBdmg2UTZzbXNINTBkLWNqUTVwc0h4V1pjUGtsSmNKQ3Y0T3NZZi130gHnAUFVX3lxTE1KZkF3d3E4MGdQLVdlMURhazhoS3hmOHpOYm5sNmhMUUdpVGJibm84UGlxbzREWHJGTVJuMFNmR2NsNVNNa1VGNThMcE1LSXNnd2xQVmFGZmFkVldFNTR3VmNNRXV1MWt5UU5LYnN4dTRhVlN2dm9zZWRCMWZOMU1qQ2hmQnh3bS0yQUdoMWRCbnpFbWtOSzh2Y0dBQ05NcUhWWmo0RXdfdHNoLUpJcjNoRXFCaDdXbmpMeGFFYmF2TmhIVWpNR0lXSHVIeHVSeURFXzBoX3M5SjJ0cHIyRmxaU2NITXVzdw?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T13:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "UOL",
            "title": "Liraglutida tem bons resultados contra declínio cognitivo por Alzheimer em estudo - UOL",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxQWXpNNHF3aG0tc1lZc25sTkVrLWVMVUNwUExUWnA5UDJZb1JHbVJTZmw2WVdwZTBJVFdoSld6S0Y5dVQtb2tKY2ktUDY5alhRTkpMUGVVSlpOT2VCLXVaeVlzZGNBZXpsWnN4U01rQVY1Q0JTaFlwMUsyOVV0SFhIM3VzTWI1VDBpSUVTS2hlYlp4ZVZHQzJCaDVVMFIyS2dhbExydExDYUNKakVIUzJZTDV0QllnVVhxdXdBZ1hzaEFMbzNoS2tIOFowLWNMWmpVX2dZR01NSVVRSlBzeFR0QjlQM3ZBNXhX0gHuAUFVX3lxTE9WLU5RUTU2X2IyUFRiOEx4M3lLck0yVXZvb1l3c2VJYlUyRXhIVDRMcFhTU1EzS0FuWGxJcUdBd0o5ZUlZWEtuV1E5czUxOWVITnJOekNPYjJwc3hSR09uM1RvNTdsX3AxWEdISGlsZEpoN2xENnQ3cy1SZTV2YjlFX1hKX2FXTkt6YnBVTEpzOTF0ejE1OVo3X2V1MF90RnZkd05JMlZ6WDQ4bmJyNnowLW5wbzRXRnlodmpkU2FjSFluZ3FOWnZFSEZqek1lWWlPQUp4NUJoX1dmRVZFck5JN1VLc3JNNFlLWmdYUlE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-30T12:45:00Z",
            "content": null
        }
    ]
}
  ]
  
  const fetchArticles = async () => {
    try {
      articles.value = articles2[0].articles;
      filteredArticles.value = articles.value;
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
    }
  };
  
  const filterArticles = () => {
    if (!keyword.value) {
      filteredArticles.value = articles.value;
    } else {
      filteredArticles.value = articles.value.filter(article =>
        article.title.toLowerCase().includes(keyword.value.toLowerCase())
      );
    }
  };
  
  const selectArticle = (article) => {
    emit('selectArticle', article);
  };
  
  onMounted(fetchArticles);
  </script>
  