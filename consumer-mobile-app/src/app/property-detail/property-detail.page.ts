import { Component, OnInit } from "@angular/core";
import { PropertiesService } from ".././services/properties.service";
import { Properties } from ".././models/properties-models";
import { NavController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-properties",
  templateUrl: "./property-detail.page.html",
  styleUrls: ["./property-detail.page.scss"]
})
export class PropertyDetailPage implements OnInit {
  public id: number;
  public name: string;
  public price: string;
  public location: string;
  public imageUrl: string;

  public properties : Array<Properties>;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private propertiesService: PropertiesService
  ) {}

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: err,
      buttons: ["OK"]
    });
    await alert.present();
  }

  ngOnInit() {
    this.propertiesService.getAll().then((response : any) => {
      this.properties = response; 
    }).catch((err) => {
      this.presentAlert(err);
    });
  }
}
