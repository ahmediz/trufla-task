import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Trufla Task';
  formJson = `
  {
    "form": [
        {
            "title": "Username",
            "fieldName": "username",
            "type": "text",
            "validations": [
                "required"
            ]
        },
        {
            "title": "Email",
            "fieldName": "email",
            "type": "text",
            "validations": [
                "required"
            ]
        },
        {
            "title": "Gender",
            "fieldName": "gender",
            "type": "select",
            "validations": [
                "required"
            ],
            "options": [
                "male",
                "female"
            ]
        },
        {
          "title": "Checkbox",
          "fieldName": "checkbox1",
          "type": "checkbox",
          "validations": []
        },
        {
          "title": "Checkbox",
          "fieldName": "checkbox2",
          "type": "checkbox",
          "validations": []
        },
        {
          "title": "Radio",
          "fieldName": "radio1",
          "type": "radio",
          "values": [
              "value 1",
              "value 2"
          ],
          "validations": []
        },
        {
          "title": "Radio",
          "fieldName": "radio2",
          "type": "radio",
          "values": [
              "value 1",
              "value 2"
          ],
          "validations": []
        }
    ]
}

`;
}
