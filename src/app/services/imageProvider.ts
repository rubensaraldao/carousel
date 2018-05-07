import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ImageProvider{
    public url: string;
    
    constructor( public http: HttpClient){

        this.url='https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=?';
    }
    /*first enable CORS on the server. Muck the service to continue*/
    
    public getImages(): Observable<any>{
                 
    
           /* let params = 'format=json&nojsoncallback=1&tags=?';     
                    
            let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
             
            return this.http.post(this.url+'productos', params, {headers: headers});
            */
        let response= this.muckService();
        return Observable.of(response);
            
    }

    private muckService(){
        let response=  {
            "title": "Uploads from everyone",
            "link": "https://www.flickr.com/photos/",
            "description": "",
            "modified": "2018-05-06T19:20:51Z",
            "generator": "https://www.flickr.com",
            "items":    [
                     {
                  "title": "Victoria Falls - Craig-1-5",
                  "link": "https://www.flickr.com/photos/22115324@N02/28063627658/",
                  "media": {"m": "https://farm1.staticflickr.com/872/28063627658_08813e35be_m.jpg"},
                  "date_taken": "2018-05-06T06:47:12-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/22115324@N02/\">Angela &amp; Craig's Photos<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/22115324@N02/28063627658/\" title=\"Victoria Falls - Craig-1-5\"><img src=\"https://farm1.staticflickr.com/872/28063627658_08813e35be_m.jpg\" width=\"240\" height=\"150\" alt=\"Victoria Falls - Craig-1-5\" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:51Z",
                  "author": "nobody@flickr.com (\"Angela & Craig's Photos\")",
                  "author_id": "22115324@N02",
                  "tags": ""
               },
                     {
                  "title": "IMG_4278",
                  "link": "https://www.flickr.com/photos/hofstaddistributie/28063628068/",
                  "media": {"m": "https://farm1.staticflickr.com/956/28063628068_107a4db317_m.jpg"},
                  "date_taken": "2018-04-19T13:47:47-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/hofstaddistributie/\">Hofstad Distributie<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/hofstaddistributie/28063628068/\" title=\"IMG_4278\"><img src=\"https://farm1.staticflickr.com/956/28063628068_107a4db317_m.jpg\" width=\"180\" height=\"240\" alt=\"IMG_4278\" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:52Z",
                  "author": "nobody@flickr.com (\"Hofstad Distributie\")",
                  "author_id": "27421042@N00",
                  "tags": ""
               },
                     {
                  "title": "Royal guard in Stockhom, Sweden",
                  "link": "https://www.flickr.com/photos/globalholidays/40127507980/",
                  "media": {"m": "https://farm1.staticflickr.com/863/40127507980_22f1df2e3f_m.jpg"},
                  "date_taken": "2018-05-06T15:33:06-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/globalholidays/\">globalholidays<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/globalholidays/40127507980/\" title=\"Royal guard in Stockhom, Sweden\"><img src=\"https://farm1.staticflickr.com/863/40127507980_22f1df2e3f_m.jpg\" width=\"180\" height=\"240\" alt=\"Royal guard in Stockhom, Sweden\" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:46Z",
                  "author": "nobody@flickr.com (\"globalholidays\")",
                  "author_id": "63171102@N02",
                  "tags": ""
               },
                     {
                  "title": "LRM_EXPORT_20180506_150630",
                  "link": "https://www.flickr.com/photos/156275429@N02/40127508320/",
                  "media": {"m": "https://farm1.staticflickr.com/965/40127508320_d060b6a334_m.jpg"},
                  "date_taken": "2018-05-06T10:04:38-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/156275429@N02/\">jndirangurobi<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/156275429@N02/40127508320/\" title=\"LRM_EXPORT_20180506_150630\"><img src=\"https://farm1.staticflickr.com/965/40127508320_d060b6a334_m.jpg\" width=\"240\" height=\"160\" alt=\"LRM_EXPORT_20180506_150630\" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:48Z",
                  "author": "nobody@flickr.com (\"jndirangurobi\")",
                  "author_id": "156275429@N02",
                  "tags": ""
               },
                     {
                  "title": "DSC_5592.jpg",
                  "link": "https://www.flickr.com/photos/richardtalbot94/40127508520/",
                  "media": {"m": "https://farm1.staticflickr.com/948/40127508520_2659b6303e_m.jpg"},
                  "date_taken": "2018-05-06T18:03:57-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/richardtalbot94/\">richardtalbot94<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/richardtalbot94/40127508520/\" title=\"DSC_5592.jpg\"><img src=\"https://farm1.staticflickr.com/948/40127508520_2659b6303e_m.jpg\" width=\"240\" height=\"160\" alt=\"DSC_5592.jpg\" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:49Z",
                  "author": "nobody@flickr.com (\"richardtalbot94\")",
                  "author_id": "136004693@N06",
                  "tags": ""
               },
                     {
                  "title": "Spring Look : Tian Yi X #sneakers",
                  "link": "https://www.flickr.com/photos/137872629@N06/40127509620/",
                  "media": {"m": "https://farm1.staticflickr.com/910/40127509620_952ae55f59_m.jpg"},
                  "date_taken": "2018-05-06T12:20:52-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/137872629@N06/\">Looks Fashion<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/137872629@N06/40127509620/\" title=\"Spring Look : Tian Yi X #sneakers\"><img src=\"https://farm1.staticflickr.com/910/40127509620_952ae55f59_m.jpg\" width=\"160\" height=\"240\" alt=\"Spring Look : Tian Yi X #sneakers\" /><\/a><\/p> <p>Spring Look <br /> <br /> Picture <br /> <br /> <br /> Description<br /> <br /> Tian Yi X #sneakers<br /> <br /> <br /> <br /> <a href=\"https://looks.tn/season/spring/spring-look-tian-yi-x-sneakers/\" rel=\"nofollow\">looks.tn/season/spring/spring-look-tian-yi-x-sneakers/<\/a><\/p>",
                  "published": "2018-05-06T19:20:52Z",
                  "author": "nobody@flickr.com (\"Looks Fashion\")",
                  "author_id": "137872629@N06",
                  "tags": ""
               },
                     {
                  "title": "Robert Downey Jr. Voted Best Marvel Actor Of All Time",
                  "link": "https://www.flickr.com/photos/fmgnewz/40127509700/",
                  "media": {"m": "https://farm1.staticflickr.com/952/40127509700_5c145a9606_m.jpg"},
                  "date_taken": "2018-05-06T12:20:52-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/fmgnewz/\">Felixtz<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/fmgnewz/40127509700/\" title=\"Robert Downey Jr. Voted Best Marvel Actor Of All Time\"><img src=\"https://farm1.staticflickr.com/952/40127509700_5c145a9606_m.jpg\" width=\"240\" height=\"160\" alt=\"Robert Downey Jr. Voted Best Marvel Actor Of All Time\" /><\/a><\/p> <p>via Blogger <a href=\"https://ift.tt/2Ij6YOF\" rel=\"nofollow\">ift.tt/2Ij6YOF<\/a><\/p>",
                  "published": "2018-05-06T19:20:52Z",
                  "author": "nobody@flickr.com (\"Felixtz\")",
                  "author_id": "164361048@N08",
                  "tags": "robert downey jr voted best marvel actor of all time httpswwwuniladcoukwpcontentuploads201805roberta262x175jpg"
               },
                     {
                  "title": "[New post] Polo Custom",
                  "link": "https://www.flickr.com/photos/48423781@N04/40127510540/",
                  "media": {"m": "https://farm1.staticflickr.com/966/40127510540_ed0fc8e887_m.jpg"},
                  "date_taken": "2018-05-06T12:20:54-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/48423781@N04/\">Fadzil Aripin<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/48423781@N04/40127510540/\" title=\"[New post] Polo Custom\"><img src=\"https://farm1.staticflickr.com/966/40127510540_ed0fc8e887_m.jpg\" width=\"240\" height=\"148\" alt=\"[New post] Polo Custom\" /><\/a><\/p> <p>[New post] Polo Custom <a href=\"https://flic.kr/p/26TDULZ\" rel=\"nofollow\">flic.kr/p/26TDULZ<\/a><\/p>",
                  "published": "2018-05-06T19:20:54Z",
                  "author": "nobody@flickr.com (\"Fadzil Aripin\")",
                  "author_id": "48423781@N04",
                  "tags": "ifttt flickr f1 shirt baju korporat"
               },
                     {
                  "title": "Buda Castle - Budapest, Hungary ",
                  "link": "https://www.flickr.com/photos/161533733@N04/40127510910/",
                  "media": {"m": "https://farm1.staticflickr.com/975/40127510910_0022a124a8_m.jpg"},
                  "date_taken": "2016-08-12T21:19:01-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/161533733@N04/\">maferpeba<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/161533733@N04/40127510910/\" title=\"Buda Castle - Budapest, Hungary \"><img src=\"https://farm1.staticflickr.com/975/40127510910_0022a124a8_m.jpg\" width=\"240\" height=\"180\" alt=\"Buda Castle - Budapest, Hungary \" /><\/a><\/p> <p>Processed with VSCO with c1 preset<\/p>",
                  "published": "2018-05-06T19:20:55Z",
                  "author": "nobody@flickr.com (\"maferpeba\")",
                  "author_id": "161533733@N04",
                  "tags": ""
               },
                     {
                  "title": "40$ for all include Prestige World Wide fit 7-9",
                  "link": "https://www.flickr.com/photos/130575007@N02/41035339005/",
                  "media": {"m": "https://farm1.staticflickr.com/828/41035339005_ba7de8b92d_m.jpg"},
                  "date_taken": "2018-05-06T15:19:54-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/130575007@N02/\">mowery_wrestlingshoes<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/130575007@N02/41035339005/\" title=\"40$ for all include Prestige World Wide fit 7-9\"><img src=\"https://farm1.staticflickr.com/828/41035339005_ba7de8b92d_m.jpg\" width=\"180\" height=\"240\" alt=\"40$ for all include Prestige World Wide fit 7-9\" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:45Z",
                  "author": "nobody@flickr.com (\"mowery_wrestlingshoes\")",
                  "author_id": "130575007@N02",
                  "tags": ""
               },
                     {
                  "title": " ",
                  "link": "https://www.flickr.com/photos/157933214@N02/41035341025/",
                  "media": {"m": "https://farm1.staticflickr.com/912/41035341025_04fb7050ee_m.jpg"},
                  "date_taken": "2018-05-06T12:20:53-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/157933214@N02/\">daniel650002<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/157933214@N02/41035341025/\" title=\" \"><img src=\"https://farm1.staticflickr.com/912/41035341025_04fb7050ee_m.jpg\" width=\"183\" height=\"240\" alt=\" \" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:53Z",
                  "author": "nobody@flickr.com (\"daniel650002\")",
                  "author_id": "157933214@N02",
                  "tags": ""
               },
                     {
                  "title": "DSC00356",
                  "link": "https://www.flickr.com/photos/158047109@N02/41216488964/",
                  "media": {"m": "https://farm1.staticflickr.com/948/41216488964_90ac729edd_m.jpg"},
                  "date_taken": "2017-07-25T03:44:13-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/158047109@N02/\">d_mazgaj<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/158047109@N02/41216488964/\" title=\"DSC00356\"><img src=\"https://farm1.staticflickr.com/948/41216488964_90ac729edd_m.jpg\" width=\"240\" height=\"180\" alt=\"DSC00356\" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:46Z",
                  "author": "nobody@flickr.com (\"d_mazgaj\")",
                  "author_id": "158047109@N02",
                  "tags": ""
               },
                     {
                  "title": "Lovely day on the Jurassic Coast",
                  "link": "https://www.flickr.com/photos/161627105@N05/41216491044/",
                  "media": {"m": "https://farm1.staticflickr.com/954/41216491044_01c5bee70f_m.jpg"},
                  "date_taken": "2018-05-06T12:18:49-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/161627105@N05/\">Willow's Bark<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/161627105@N05/41216491044/\" title=\"Lovely day on the Jurassic Coast\"><img src=\"https://farm1.staticflickr.com/954/41216491044_01c5bee70f_m.jpg\" width=\"240\" height=\"135\" alt=\"Lovely day on the Jurassic Coast\" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:53Z",
                  "author": "nobody@flickr.com (\"Willow's Bark\")",
                  "author_id": "161627105@N05",
                  "tags": ""
               },
                     {
                  "title": "すべての写真-3694",
                  "link": "https://www.flickr.com/photos/62153500@N06/41890607492/",
                  "media": {"m": "https://farm1.staticflickr.com/903/41890607492_df39b1a448_m.jpg"},
                  "date_taken": "2018-05-06T14:49:49-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/62153500@N06/\">ysbay98<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/62153500@N06/41890607492/\" title=\"すべての写真-3694\"><img src=\"https://farm1.staticflickr.com/903/41890607492_df39b1a448_m.jpg\" width=\"240\" height=\"180\" alt=\"すべての写真-3694\" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:49Z",
                  "author": "nobody@flickr.com (\"ysbay98\")",
                  "author_id": "62153500@N06",
                  "tags": "201805"
               },
                     {
                  "title": "Bamber Bridge v Prescot Cables Play Off Final 2018-1215.jpg",
                  "link": "https://www.flickr.com/photos/bamberbridgefc/41890607502/",
                  "media": {"m": "https://farm1.staticflickr.com/870/41890607502_88783da925_m.jpg"},
                  "date_taken": "2018-05-05T15:08:57-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/bamberbridgefc/\">BamberBridgeFC<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/bamberbridgefc/41890607502/\" title=\"Bamber Bridge v Prescot Cables Play Off Final 2018-1215.jpg\"><img src=\"https://farm1.staticflickr.com/870/41890607502_88783da925_m.jpg\" width=\"240\" height=\"170\" alt=\"Bamber Bridge v Prescot Cables Play Off Final 2018-1215.jpg\" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:49Z",
                  "author": "nobody@flickr.com (\"BamberBridgeFC\")",
                  "author_id": "144004262@N06",
                  "tags": ""
               },
                     {
                  "title": " ",
                  "link": "https://www.flickr.com/photos/114006973@N04/41890607732/",
                  "media": {"m": "https://farm1.staticflickr.com/978/41890607732_8049029ab0_m.jpg"},
                  "date_taken": "2018-05-06T17:22:39-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/114006973@N04/\">Bätös<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/114006973@N04/41890607732/\" title=\" \"><img src=\"https://farm1.staticflickr.com/978/41890607732_8049029ab0_m.jpg\" width=\"240\" height=\"160\" alt=\" \" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:49Z",
                  "author": "nobody@flickr.com (\"Bätös\")",
                  "author_id": "114006973@N04",
                  "tags": ""
               },
                     {
                  "title": "Schwaigsee",
                  "link": "https://www.flickr.com/photos/52049987@N02/41890609712/",
                  "media": {"m": "https://farm1.staticflickr.com/951/41890609712_0e5df13567_m.jpg"},
                  "date_taken": "2018-05-06T08:05:08-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/52049987@N02/\">Andreas Bödiger<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/52049987@N02/41890609712/\" title=\"Schwaigsee\"><img src=\"https://farm1.staticflickr.com/951/41890609712_0e5df13567_m.jpg\" width=\"240\" height=\"160\" alt=\"Schwaigsee\" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:54Z",
                  "author": "nobody@flickr.com (\"Andreas Bödiger\")",
                  "author_id": "52049987@N02",
                  "tags": ""
               },
                     {
                  "title": " ",
                  "link": "https://www.flickr.com/photos/kris_butler/41890609872/",
                  "media": {"m": "https://farm1.staticflickr.com/971/41890609872_ff2bab9911_m.jpg"},
                  "date_taken": "2018-04-08T17:10:09-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/kris_butler/\">Kris_Butler<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/kris_butler/41890609872/\" title=\" \"><img src=\"https://farm1.staticflickr.com/971/41890609872_ff2bab9911_m.jpg\" width=\"240\" height=\"180\" alt=\" \" /><\/a><\/p> ",
                  "published": "2018-05-06T19:20:54Z",
                  "author": "nobody@flickr.com (\"Kris_Butler\")",
                  "author_id": "90462210@N00",
                  "tags": ""
               },
                     {
                  "title": "IMG_20180505_211010",
                  "link": "https://www.flickr.com/photos/150432775@N03/41935144451/",
                  "media": {"m": "https://farm1.staticflickr.com/826/41935144451_7f976803a5_m.jpg"},
                  "date_taken": "2018-05-05T21:10:11-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/150432775@N03/\">k2bikreisman<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/150432775@N03/41935144451/\" title=\"IMG_20180505_211010\"><img src=\"https://farm1.staticflickr.com/826/41935144451_7f976803a5_m.jpg\" width=\"180\" height=\"240\" alt=\"IMG_20180505_211010\" /><\/a><\/p> <p>cof<\/p>",
                  "published": "2018-05-06T19:20:49Z",
                  "author": "nobody@flickr.com (\"k2bikreisman\")",
                  "author_id": "150432775@N03",
                  "tags": ""
               },
                     {
                  "title": "Centara Grand Beach Resort & Villas Hua Hin Wedding Photography",
                  "link": "https://www.flickr.com/photos/netphoto/41935144721/",
                  "media": {"m": "https://farm1.staticflickr.com/971/41935144721_989b34b6e3_m.jpg"},
                  "date_taken": "2013-07-11T21:14:39-08:00",
                  "description": " <p><a href=\"https://www.flickr.com/people/netphoto/\">NET-Photography | Thailand Photographer<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/netphoto/41935144721/\" title=\"Centara Grand Beach Resort &amp; Villas Hua Hin Wedding Photography\"><img src=\"https://farm1.staticflickr.com/971/41935144721_989b34b6e3_m.jpg\" width=\"240\" height=\"160\" alt=\"Centara Grand Beach Resort &amp; Villas Hua Hin Wedding Photography\" /><\/a><\/p> <p>Destination wedding photo taken at Centara Grand Beach Resort &amp; Villas Hua Hin in Thailand.<br /> <br /> <br /> Photo by NET-Photography<br /> Thailand Professional Documentary Wedding Photographer<br /> <br /> <a href=\"http://net-photography.com\" rel=\"nofollow\">net-photography.com<\/a><br /> info@net-photography.com<br /> <br /> <br /> FOLLOW US ON INSTAGRAM !<br /> <a href=\"https://www.instagram.com/net__photography/\" rel=\"nofollow\">www.instagram.com/net__photography/<\/a><\/p>",
                  "published": "2018-05-06T19:20:51Z",
                  "author": "nobody@flickr.com (\"NET-Photography | Thailand Photographer\")",
                  "author_id": "30868846@N02",
                  "tags": "2013 50mm 50mmf14 6400 centaragrandbeachresortvillashuahin d4 beach camera centara destinationwedding f20 grand huahin iso iso6400 netphotographer nikon resort th tha thailand villas wedding netphotography photographer photography professional service documentary prewedding prenuptial honeymoon session best postwedding couple love asia asian destination popular thai local prachuapkhirikhan"
               }
            ]
         }

         return response;
    }

    


}