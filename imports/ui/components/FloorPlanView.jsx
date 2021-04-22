import React, { Component } from 'react';
import * as Constants from '/imports/ui/util/Constants';

class FloorPlanView extends React.Component {
    getNewColor = (roomNum, newAvgTemp) => {
      let isActivated =
        roomNum == 0
          ? this.props.visibility.rm0
          : roomNum == 1
          ? this.props.visibility.rm1
          : roomNum == 2
          ? this.props.visibility.rm2
          : roomNum == 3
          ? this.props.visibility.rm3
          : roomNum == 4
          ? this.props.visibility.rm4
          : roomNum == 5
          ? this.props.visibility.rm5
          : this.props.visibility.rm6;
      if (!isActivated) {
        return 'lightgray';
      } else {
        let intensity = (newAvgTemp - Constants.minTemp) / (Constants.maxTemp - Constants.minTemp);
        return `rgb(63,81,181,${0.5+intensity/2})`;
      }
    }
    render() {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="900" height="642" viewBox="0 0 900 642">
          <g id="Floorplan" transform="translate(-52 -71)">
            <g id="Room_0" transform="translate(78.705 94.943)" cursor="pointer" onClick={this.props.toggleRoom0}>
              <g id="Room_0-2" transform="translate(0.295 0.057)" fill={this.getNewColor(0, this.props.rm0temp)}>
                <path d="M 342.5 255.4991760253906 L 0.5 255.4991760253906 L 0.5 244.0845947265625 L 25.35909080505371 244.0845947265625 L 25.84799957275391 244.0845947265625 L 25.85895538330078 243.5958251953125 L 25.85968208312988 243.5634155273438 L 25.85981750488281 243.5577697753906 L 25.85981750488281 243.5521850585938 C 25.85981750488281 243.5239105224609 25.86000061035156 243.4956359863281 25.86022758483887 243.4672241210938 L 25.86031723022461 243.4517669677734 C 25.86050033569336 243.4261779785156 25.86063575744629 243.3998107910156 25.86063575744629 243.3734588623047 C 25.86063575744629 239.8804016113281 25.16577339172363 236.4896392822266 23.79536437988281 233.2953186035156 C 22.4720458984375 230.2112274169922 20.57704544067383 227.4394989013672 18.16300010681152 225.0572204589844 C 15.75136375427246 222.6756439208984 12.94063663482666 220.8005523681641 9.809136390686035 219.4841766357422 C 6.853689670562744 218.2419891357422 3.724145174026489 217.5486907958984 0.5 217.4211273193359 L 0.5 0.5 L 342.5 0.5 L 342.5 109.5207290649414 L 317.6417846679688 109.5207290649414 L 317.1417846679688 109.5207290649414 L 317.1417846679688 110.0207290649414 L 317.1417846679688 110.052360534668 L 317.1414489746094 110.1227722167969 L 317.141357421875 110.1380462646484 L 317.1412353515625 110.1511840820313 C 317.1410522460938 110.1784057617188 317.1409606933594 110.2046813964844 317.1409606933594 110.2310943603516 C 317.1409606933594 113.7248611450195 317.8357849121094 117.1156387329102 319.2061462402344 120.3092269897461 C 320.5296020507813 123.3930892944336 322.4245910644531 126.1650466918945 324.8385314941406 128.5480499267578 C 327.2507629394531 130.9293212890625 330.0614624023438 132.8041381835938 333.1924438476563 134.1203155517578 C 336.1488952636719 135.3628540039063 339.2777404785156 136.0563201904297 342.5 136.1840209960938 L 342.5 255.4991760253906 Z" stroke="none"/>
                <path d="M 342 254.9991760253906 L 342 136.6604766845703 C 338.8869934082031 136.4832458496094 335.8636169433594 135.7853240966797 332.9986877441406 134.5812683105469 C 329.8086853027344 133.2402801513672 326.9450378417969 131.3301391601563 324.4872741699219 128.9038696289063 C 322.0271301269531 126.4752731323242 320.0956726074219 123.6499557495117 318.7466735839844 120.5063629150391 C 317.3493957519531 117.2501373291016 316.6409606933594 113.7930450439453 316.6409606933594 110.2310943603516 C 316.6409606933594 110.2034530639648 316.6410522460938 110.1759567260742 316.6412658691406 110.1465454101563 L 316.641357421875 110.1349563598633 L 316.6415100097656 110.1195907592773 L 316.6417846679688 110.052360534668 L 316.6417846679688 110.0207290649414 L 316.6417846679688 109.0207290649414 L 317.6417846679688 109.0207290649414 L 342 109.0207290649414 L 342 1 L 1 1 L 1 216.9446411132813 C 4.114899635314941 217.1216735839844 7.138711452484131 217.8194274902344 10.00286388397217 219.0232696533203 C 13.19340896606445 220.3644561767578 16.05713653564453 222.27490234375 18.51418113708496 224.7013244628906 C 20.97445487976074 227.1292724609375 22.90590858459473 229.9543609619141 24.25486373901367 233.0981750488281 C 25.65213584899902 236.3551330566406 26.36063575744629 239.8122253417969 26.36063575744629 243.3734588623047 C 26.36063575744629 243.4010467529297 26.36050033569336 243.4285888671875 26.36031723022461 243.4548645019531 L 26.36018180847168 243.4710388183594 C 26.36000061035156 243.4981842041016 26.35981750488281 243.5251770019531 26.35981750488281 243.5521850585938 L 26.35981750488281 243.5634155273438 L 26.35954475402832 243.5746307373047 L 26.35881805419922 243.6070404052734 L 26.3369083404541 244.5845947265625 L 25.35909080505371 244.5845947265625 L 1 244.5845947265625 L 1 254.9991760253906 L 342 254.9991760253906 M 343 256 L 343 255.9991760253906 L 0 255.9991760253906 L 0 243.5845947265625 L 25.35909080505371 243.5845947265625 L 25.35981750488281 243.5521850585938 C 25.35981750488281 243.5226287841797 25.36000061035156 243.4930877685547 25.36022758483887 243.4634094238281 L 25.36031723022461 243.4486846923828 C 25.36050033569336 243.4237213134766 25.36063575744629 243.3985900878906 25.36063575744629 243.3734588623047 C 25.36063575744629 239.9485473632813 24.67940902709961 236.6241302490234 23.33586311340332 233.4924621582031 C 22.03813552856445 230.4680023193359 20.17954635620117 227.7497253417969 17.8117733001709 225.4130859375 C 15.4455451965332 223.0763702392578 12.68786334991455 221.2366790771484 9.615364074707031 219.9451293945313 C 6.568772792816162 218.6645965576172 3.33368182182312 217.9785461425781 0 217.906005859375 L 0 1.4210854715202e-14 L 343 1.4210854715202e-14 L 343 110.0207290649414 L 317.6417846679688 110.0207290649414 L 317.6417846679688 110.052360534668 C 317.6417846679688 110.0819091796875 317.6415405273438 110.1114120483398 317.641357421875 110.1410903930664 L 317.6412353515625 110.1558151245117 C 317.6410522460938 110.1808166503906 317.6409606933594 110.2059097290039 317.6409606933594 110.2310943603516 C 317.6409606933594 113.6567306518555 318.3221740722656 116.9811782836914 319.6656494140625 120.1120452880859 C 320.9634399414063 123.1362762451172 322.8220520019531 125.8548202514648 325.1898193359375 128.1922302246094 C 327.556640625 130.5286865234375 330.3143310546875 132.3680419921875 333.38623046875 133.6594085693359 C 336.43359375 134.9401397705078 339.6681213378906 135.6264953613281 343 135.6991882324219 L 343 255.9991760253906 L 343 256 Z" stroke="none" fill="#707070"/>
              </g>
              <text id="Room_0-3" transform="translate(118.295 162.057)" font-size="29" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">Room 0</tspan></text>
              <text id="Upper_Level_Residential_Lounge" data-name="Upper Level
        Residential Lounge" transform="translate(165.295 101.057)" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="-41.586" y="0">Upper Level</tspan><tspan x="-67.641" y="19">Residential Lounge</tspan></text>
            </g>
            <g id="R1" transform="translate(87.468 486.395)" cursor="pointer" onClick={this.props.toggleRoom1}>
              <g id="R1-2" transform="translate(-0.468 -0.395)" fill={this.getNewColor(1, this.props.rm1temp)}>
                <path d="M 144.5 226.4991455078125 L 0.5 226.4991455078125 L 0.5 0.5002341866493225 L 105.2722930908203 0.500001072883606 C 105.3536987304688 3.865437507629395 106.0494613647461 7.127131462097168 107.3427658081055 10.20314693450928 C 108.6547622680664 13.32426452636719 110.5228500366211 16.12517738342285 112.8950881958008 18.52799987792969 C 115.2687911987305 20.93314743041992 118.0301742553711 22.8212947845459 121.1024398803711 24.13991165161133 C 124.2831497192383 25.50555801391602 127.66162109375 26.19799995422363 131.1439056396484 26.19799995422363 L 131.3212280273438 26.19799995422363 L 131.3271484375 26.19799995422363 L 131.3330535888672 26.19785308837891 L 131.3653869628906 26.19708824157715 L 131.8535614013672 26.1855583190918 L 131.8535614013672 25.69723510742188 L 131.8535308837891 0.5002353191375732 L 144.5 0.5002353191375732 L 144.5 226.4991455078125 Z" stroke="none"/>
                <path d="M 144 225.9991455078125 L 144 1.000235319137573 L 132.3535308837891 1.000235319137573 L 132.3535614013672 25.69723510742188 L 132.3535614013672 26.67385292053223 L 131.3772125244141 26.69694137573242 L 131.3448791503906 26.69770622253418 L 131.3330535888672 26.69799995422363 L 131.3212280273438 26.69799995422363 L 131.1439056396484 26.69799995422363 C 127.5934143066406 26.69799995422363 124.1485900878906 25.99191093444824 120.9052352905273 24.5993824005127 C 117.7732925415039 23.25514793395996 114.9585266113281 21.33058738708496 112.5392913818359 18.87926483154297 C 110.1220855712891 16.43091201782227 108.2186508178711 13.57702922821045 106.8818511962891 10.39694118499756 C 105.6268463134766 7.411986351013184 104.9241256713867 4.255468845367432 104.7885131835938 1.000002145767212 L 1 1.000233054161072 L 1 225.9991455078125 L 144 225.9991455078125 M 145 227 L 145 226.9991455078125 L 0 226.9991455078125 L 0 0.0002352941228309646 L 105.7647323608398 0 C 105.7863845825195 3.474911689758301 106.4720916748047 6.842264652252197 107.8036727905273 10.009352684021 C 109.0909118652344 13.07152938842773 110.9236145019531 15.81941223144531 113.2509155273438 18.17670631408691 C 115.5790328979492 20.53567695617676 118.2870025634766 22.38741111755371 121.2996444702148 23.68044090270996 C 124.4177627563477 25.01920509338379 127.729850769043 25.69799995422363 131.1439056396484 25.69799995422363 L 131.3212280273438 25.69799995422363 L 131.3535614013672 25.69723510742188 L 131.3535308837891 0.0002352941228309646 L 145 0.0002352941228309646 L 145 226.9991455078125 L 145 227 Z" stroke="none" fill="#707070"/>
              </g>
              <text id="R1-3" transform="translate(54.532 146.605)" font-size="30" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">R1</tspan></text>
              <text id="Single_Bedroom" transform="translate(69.532 85.605)" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="-21.77" y="0">Single</tspan><tspan x="-32.496" y="19">Bedroom</tspan></text>
            </g>
            <g id="R2" transform="translate(231.046 486.395)" cursor="pointer" onClick={this.props.toggleRoom2}>
              <g id="R2-2" transform="translate(-0.046 -0.395)" fill={this.getNewColor(2, this.props.rm2temp)}>
                <path d="M 144.5 226.4991455078125 L 0.5 226.4991455078125 L 0.5 0.5002341866493225 L 105.2722930908203 0.500001072883606 C 105.3536987304688 3.865437507629395 106.0494613647461 7.127131462097168 107.3427658081055 10.20314693450928 C 108.6547622680664 13.32426452636719 110.5228500366211 16.12517738342285 112.8950881958008 18.52799987792969 C 115.2687911987305 20.93314743041992 118.0301742553711 22.8212947845459 121.1024398803711 24.13991165161133 C 124.2831497192383 25.50555801391602 127.66162109375 26.19799995422363 131.1439056396484 26.19799995422363 L 131.3212280273438 26.19799995422363 L 131.3271484375 26.19799995422363 L 131.3330535888672 26.19785308837891 L 131.3653869628906 26.19708824157715 L 131.8535614013672 26.1855583190918 L 131.8535614013672 25.69723510742188 L 131.8535308837891 0.5002353191375732 L 144.5 0.5002353191375732 L 144.5 226.4991455078125 Z" stroke="none"/>
                <path d="M 144 225.9991455078125 L 144 1.000235319137573 L 132.3535308837891 1.000235319137573 L 132.3535614013672 25.69723510742188 L 132.3535614013672 26.67385292053223 L 131.3772125244141 26.69694137573242 L 131.3448791503906 26.69770622253418 L 131.3330535888672 26.69799995422363 L 131.3212280273438 26.69799995422363 L 131.1439056396484 26.69799995422363 C 127.5934143066406 26.69799995422363 124.1485900878906 25.99191093444824 120.9052352905273 24.5993824005127 C 117.7732925415039 23.25514793395996 114.9585266113281 21.33058738708496 112.5392913818359 18.87926483154297 C 110.1220855712891 16.43091201782227 108.2186508178711 13.57702922821045 106.8818511962891 10.39694118499756 C 105.6268463134766 7.411986351013184 104.9241256713867 4.255468845367432 104.7885131835938 1.000002145767212 L 1 1.000233054161072 L 1 225.9991455078125 L 144 225.9991455078125 M 145 227 L 145 226.9991455078125 L 0 226.9991455078125 L 0 0.0002352941228309646 L 105.7647323608398 0 C 105.7863845825195 3.474911689758301 106.4720916748047 6.842264652252197 107.8036727905273 10.009352684021 C 109.0909118652344 13.07152938842773 110.9236145019531 15.81941223144531 113.2509155273438 18.17670631408691 C 115.5790328979492 20.53567695617676 118.2870025634766 22.38741111755371 121.2996444702148 23.68044090270996 C 124.4177627563477 25.01920509338379 127.729850769043 25.69799995422363 131.1439056396484 25.69799995422363 L 131.3212280273438 25.69799995422363 L 131.3535614013672 25.69723510742188 L 131.3535308837891 0.0002352941228309646 L 145 0.0002352941228309646 L 145 226.9991455078125 L 145 227 Z" stroke="none" fill="#707070"/>
              </g>
              <text id="R2-3" transform="translate(57.954 146.605)" font-size="30" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">R2</tspan></text>
              <text id="Single_Bedroom-2" data-name="Single
        Bedroom" transform="translate(72.954 85.605)" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="-21.77" y="0">Single</tspan><tspan x="-32.496" y="19">Bedroom</tspan></text>
            </g>
            <g id="R3" transform="translate(374.545 485.395)" cursor="pointer" onClick={this.props.toggleRoom3}>
              <g id="R3-2" transform="translate(145.456 227.605) rotate(180)" fill={this.getNewColor(3, this.props.rm3temp)}>
                <path d="M 105.2722930908203 226.5 L 0.5 226.4997711181641 L 0.5 0.5008529424667358 L 144.5 0.5008529424667358 L 144.5 226.4997711181641 L 131.8535308837891 226.4997711181641 L 131.8535614013672 201.3027648925781 L 131.8535614013672 200.8144378662109 L 131.3653869628906 200.8029174804688 L 131.3330535888672 200.8021545410156 L 131.3271484375 200.802001953125 L 131.3212280273438 200.802001953125 L 131.1439056396484 200.802001953125 C 127.66162109375 200.802001953125 124.2831497192383 201.4944458007813 121.1023788452148 202.8601226806641 C 118.030143737793 204.1787414550781 115.2687683105469 206.0668792724609 112.8950271606445 208.4720916748047 C 110.5228500366211 210.8748016357422 108.6547622680664 213.6757049560547 107.3427352905273 216.796875 C 106.0494613647461 219.8728637695313 105.3536987304688 223.1345672607422 105.2722930908203 226.5 Z" stroke="none"/>
                <path d="M 1 1.0008544921875 L 1 225.9997711181641 L 104.7885131835938 226 C 104.9241333007813 222.7445373535156 105.6268463134766 219.5880126953125 106.8818206787109 216.6030883789063 C 108.2186431884766 213.4229431152344 110.1220855712891 210.5690612792969 112.539176940918 208.120849609375 C 114.9585266113281 205.66943359375 117.7732620239258 203.7448883056641 120.9051208496094 202.4006805419922 C 124.1485900878906 201.0080871582031 127.5934143066406 200.302001953125 131.1439056396484 200.302001953125 L 131.3212280273438 200.302001953125 L 131.3330535888672 200.302001953125 L 131.3448791503906 200.3022918701172 L 131.3772125244141 200.3030548095703 L 132.3535614013672 200.3261413574219 L 132.3535614013672 201.3027648925781 L 132.3535308837891 225.9997711181641 L 144 225.9997711181641 L 144 1.0008544921875 L 1 1.0008544921875 M 145 0 L 145 0.0008544921875 L 145 0 Z M 0 0.0008544921875 L 145 0.0008544921875 L 145 226.9997711181641 L 131.3535308837891 226.9997711181641 L 131.3535614013672 201.3027648925781 L 131.3212280273438 201.302001953125 L 131.1439056396484 201.302001953125 C 127.729850769043 201.302001953125 124.4177627563477 201.9807891845703 121.2996444702148 203.3195648193359 C 118.2870330810547 204.6125946044922 115.5790252685547 206.4643249511719 113.2509155273438 208.8232879638672 C 110.9236145019531 211.1805572509766 109.0909118652344 213.9284362792969 107.8036804199219 216.9906158447266 C 106.4720916748047 220.1577301025391 105.786376953125 223.5250854492188 105.7647399902344 227 L 0 226.9997711181641 L 0 0.0008544921875 Z" stroke="none" fill="#707070"/>
              </g>
              <text id="R3-3" transform="translate(56.455 146.605)" font-size="30" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">R3</tspan></text>
              <text id="Single_Bedroom-3" data-name="Single
        Bedroom" transform="translate(70.455 85.605)" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="-21.77" y="0">Single</tspan><tspan x="-32.496" y="19">Bedroom</tspan></text>
            </g>
            <g id="R4" transform="translate(519.122 486.395)" cursor="pointer" onClick={this.props.toggleRoom4}>
              <g id="R4-2" transform="translate(-0.122 -0.395)" fill={this.getNewColor(4, this.props.rm4temp)}>
                <path d="M 144.5 226.4991455078125 L 0.5 226.4991455078125 L 0.5 0.5002341866493225 L 105.2722930908203 0.500001072883606 C 105.3536987304688 3.865437507629395 106.0494613647461 7.127131462097168 107.3427658081055 10.20314693450928 C 108.6547622680664 13.32426452636719 110.5228500366211 16.12517738342285 112.8950881958008 18.52799987792969 C 115.2687911987305 20.93314743041992 118.0301742553711 22.8212947845459 121.1024398803711 24.13991165161133 C 124.2831497192383 25.50555801391602 127.66162109375 26.19799995422363 131.1439056396484 26.19799995422363 L 131.3212280273438 26.19799995422363 L 131.3271484375 26.19799995422363 L 131.3330535888672 26.19785308837891 L 131.3653869628906 26.19708824157715 L 131.8535614013672 26.1855583190918 L 131.8535614013672 25.69723510742188 L 131.8535308837891 0.5002353191375732 L 144.5 0.5002353191375732 L 144.5 226.4991455078125 Z" stroke="none"/>
                <path d="M 144 225.9991455078125 L 144 1.000235319137573 L 132.3535308837891 1.000235319137573 L 132.3535614013672 25.69723510742188 L 132.3535614013672 26.67385292053223 L 131.3772125244141 26.69694137573242 L 131.3448791503906 26.69770622253418 L 131.3330535888672 26.69799995422363 L 131.3212280273438 26.69799995422363 L 131.1439056396484 26.69799995422363 C 127.5934143066406 26.69799995422363 124.1485900878906 25.99191093444824 120.9052352905273 24.5993824005127 C 117.7732925415039 23.25514793395996 114.9585266113281 21.33058738708496 112.5392913818359 18.87926483154297 C 110.1220855712891 16.43091201782227 108.2186508178711 13.57702922821045 106.8818511962891 10.39694118499756 C 105.6268463134766 7.411986351013184 104.9241256713867 4.255468845367432 104.7885131835938 1.000002145767212 L 1 1.000233054161072 L 1 225.9991455078125 L 144 225.9991455078125 M 145 227 L 145 226.9991455078125 L 0 226.9991455078125 L 0 0.0002352941228309646 L 105.7647323608398 0 C 105.7863845825195 3.474911689758301 106.4720916748047 6.842264652252197 107.8036727905273 10.009352684021 C 109.0909118652344 13.07152938842773 110.9236145019531 15.81941223144531 113.2509155273438 18.17670631408691 C 115.5790328979492 20.53567695617676 118.2870025634766 22.38741111755371 121.2996444702148 23.68044090270996 C 124.4177627563477 25.01920509338379 127.729850769043 25.69799995422363 131.1439056396484 25.69799995422363 L 131.3212280273438 25.69799995422363 L 131.3535614013672 25.69723510742188 L 131.3535308837891 0.0002352941228309646 L 145 0.0002352941228309646 L 145 226.9991455078125 L 145 227 Z" stroke="none" fill="#707070"/>
              </g>
              <text id="R4-3" transform="translate(56.878 146.605)" font-size="30" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">R4</tspan></text>
              <text id="Single_Bedroom-4" data-name="Single
        Bedroom" transform="translate(72.878 85.605)" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="-21.77" y="0">Single</tspan><tspan x="-32.496" y="19">Bedroom</tspan></text>
            </g>
            <g id="R5" transform="translate(662.7 486.395)" cursor="pointer" onClick={this.props.toggleRoom5}>
              <g id="R5-2" transform="translate(0.3 -0.395)" fill={this.getNewColor(5, this.props.rm5temp)}>
                <path d="M 144.5 226.4991455078125 L 0.5 226.4991455078125 L 0.5 0.5002341866493225 L 105.2722930908203 0.500001072883606 C 105.3536987304688 3.865437507629395 106.0494613647461 7.127131462097168 107.3427658081055 10.20314693450928 C 108.6547622680664 13.32426452636719 110.5228500366211 16.12517738342285 112.8950881958008 18.52799987792969 C 115.2687911987305 20.93314743041992 118.0301742553711 22.8212947845459 121.1024398803711 24.13991165161133 C 124.2831497192383 25.50555801391602 127.66162109375 26.19799995422363 131.1439056396484 26.19799995422363 L 131.3212280273438 26.19799995422363 L 131.3271484375 26.19799995422363 L 131.3330535888672 26.19785308837891 L 131.3653869628906 26.19708824157715 L 131.8535614013672 26.1855583190918 L 131.8535614013672 25.69723510742188 L 131.8535308837891 0.5002353191375732 L 144.5 0.5002353191375732 L 144.5 226.4991455078125 Z" stroke="none"/>
                <path d="M 144 225.9991455078125 L 144 1.000235319137573 L 132.3535308837891 1.000235319137573 L 132.3535614013672 25.69723510742188 L 132.3535614013672 26.67385292053223 L 131.3772125244141 26.69694137573242 L 131.3448791503906 26.69770622253418 L 131.3330535888672 26.69799995422363 L 131.3212280273438 26.69799995422363 L 131.1439056396484 26.69799995422363 C 127.5934143066406 26.69799995422363 124.1485900878906 25.99191093444824 120.9052352905273 24.5993824005127 C 117.7732925415039 23.25514793395996 114.9585266113281 21.33058738708496 112.5392913818359 18.87926483154297 C 110.1220855712891 16.43091201782227 108.2186508178711 13.57702922821045 106.8818511962891 10.39694118499756 C 105.6268463134766 7.411986351013184 104.9241256713867 4.255468845367432 104.7885131835938 1.000002145767212 L 1 1.000233054161072 L 1 225.9991455078125 L 144 225.9991455078125 M 145 227 L 145 226.9991455078125 L 0 226.9991455078125 L 0 0.0002352941228309646 L 105.7647323608398 0 C 105.7863845825195 3.474911689758301 106.4720916748047 6.842264652252197 107.8036727905273 10.009352684021 C 109.0909118652344 13.07152938842773 110.9236145019531 15.81941223144531 113.2509155273438 18.17670631408691 C 115.5790328979492 20.53567695617676 118.2870025634766 22.38741111755371 121.2996444702148 23.68044090270996 C 124.4177627563477 25.01920509338379 127.729850769043 25.69799995422363 131.1439056396484 25.69799995422363 L 131.3212280273438 25.69799995422363 L 131.3535614013672 25.69723510742188 L 131.3535308837891 0.0002352941228309646 L 145 0.0002352941228309646 L 145 226.9991455078125 L 145 227 Z" stroke="none" fill="#707070"/>
              </g>
              <text id="R5-3" transform="translate(58.3 146.605)" font-size="30" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">R5</tspan></text>
              <text id="Single_Bedroom-5" transform="translate(73.3 85.605)" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="-21.77" y="0">Single</tspan><tspan x="-32.496" y="19">Bedroom</tspan></text>
            </g>
            <g id="R6" transform="translate(806.199 485.395)" cursor="pointer" onClick={this.props.toggleRoom6}>
              <g id="R6-2" transform="translate(145.801 227.605) rotate(180)" fill={this.getNewColor(6, this.props.rm6temp)}>
                <path d="M 105.2722625732422 226.5 L 0.5 226.4997711181641 L 0.5 0.5008529424667358 L 144.5 0.5008529424667358 L 144.5 226.4997711181641 L 131.8535308837891 226.4997711181641 L 131.8535614013672 201.3027648925781 L 131.8535614013672 200.8144378662109 L 131.3653869628906 200.8029174804688 L 131.3330535888672 200.8021545410156 L 131.3271484375 200.802001953125 L 131.3212280273438 200.802001953125 L 131.1439056396484 200.802001953125 C 127.66162109375 200.802001953125 124.2831497192383 201.4944458007813 121.1023788452148 202.8601226806641 C 118.0301742553711 204.1787109375 115.2687911987305 206.0668487548828 112.8950271606445 208.4720916748047 C 110.5228500366211 210.8748016357422 108.6547622680664 213.6757049560547 107.3427352905273 216.796875 C 106.0494842529297 219.8728485107422 105.3537063598633 223.1345367431641 105.2722625732422 226.5 Z" stroke="none"/>
                <path d="M 1 1.0008544921875 L 1 225.9997711181641 L 104.7884979248047 226 C 104.9241333007813 222.7445068359375 105.6268463134766 219.5879821777344 106.8818206787109 216.6030883789063 C 108.2186431884766 213.4229431152344 110.1220855712891 210.5690612792969 112.539176940918 208.120849609375 C 114.9585266113281 205.6694183349609 117.7732925415039 203.7448577880859 120.9051208496094 202.4006805419922 C 124.1485900878906 201.0080871582031 127.5934143066406 200.302001953125 131.1439056396484 200.302001953125 L 131.3212280273438 200.302001953125 L 131.3330535888672 200.302001953125 L 131.3448791503906 200.3022918701172 L 131.3772125244141 200.3030548095703 L 132.3535614013672 200.3261413574219 L 132.3535614013672 201.3027648925781 L 132.3535003662109 225.9997711181641 L 144 225.9997711181641 L 144 1.0008544921875 L 1 1.0008544921875 M 145 0 L 145 0.0008544921875 L 145 0 Z M 0 0.0008544921875 L 145 0.0008544921875 L 145 226.9997711181641 L 131.3535003662109 226.9997711181641 L 131.3535614013672 201.3027648925781 L 131.3212280273438 201.302001953125 L 131.1439056396484 201.302001953125 C 127.729850769043 201.302001953125 124.4177627563477 201.9807891845703 121.2996444702148 203.3195648193359 C 118.2870025634766 204.6125946044922 115.5790252685547 206.4643249511719 113.2509155273438 208.8232879638672 C 110.9236145019531 211.1805572509766 109.0909118652344 213.9284362792969 107.8036804199219 216.9906158447266 C 106.4720916748047 220.1577301025391 105.786376953125 223.5250854492188 105.7647094726563 227 L 0 226.9997711181641 L 0 0.0008544921875 Z" stroke="none" fill="#707070"/>
              </g>
              <text id="R6-3" transform="translate(58.801 146.605)" font-size="30" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">R6</tspan></text>
              <text id="Single_Bedroom-6" transform="translate(73.801 85.605)" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="-21.77" y="0">Single</tspan><tspan x="-32.496" y="19">Bedroom</tspan></text>
            </g>
            <g id="Side_Room_1" transform="translate(113 351) rotate(90)" fill="none">
              <path d="M63,34H29.326A17.1,17.1,0,0,0,12.208,17h-.141V34H0V0H63V34Z" stroke="none"/>
              <path d="M 62 32.99997329711914 L 62 1 L 1 1 L 1 32.99914932250977 L 11.06624031066895 32.99914932250977 L 11.06624031066895 16.99995994567871 L 11.06624031066895 15.99995994567871 L 12.06624031066895 15.99995994567871 L 12.07904148101807 15.99995994567871 C 12.12171745300293 15.99924182891846 12.16504096984863 15.99919033050537 12.20759963989258 15.99919033050537 C 14.64422988891602 15.99919033050537 17.00909996032715 16.47467041015625 19.23644065856934 17.41238975524902 C 21.3876895904541 18.31786918640137 23.32097053527832 19.61414909362793 24.98258018493652 21.26520919799805 C 26.64365005493164 22.91571044921875 27.95203971862793 24.839599609375 28.8715705871582 26.98378944396973 C 29.69207763671875 28.89919853210449 30.16901397705078 30.9182243347168 30.29365730285645 32.99917602539063 L 62 32.99997329711914 M 63 34 L 62.99914169311523 34 L 29.32637023925781 33.99914932250977 C 29.3123893737793 31.70148086547852 28.85040092468262 29.47394943237305 27.95236015319824 27.37755966186523 C 27.08375930786133 25.35211944580078 25.84744071960449 23.5342903137207 24.27773094177246 21.97456932067871 C 22.70755958557129 20.41436004638672 20.88091087341309 19.18952941894531 18.8484992980957 18.33407020568848 C 16.74456977844238 17.44831085205078 14.51025009155273 16.99918937683105 12.20759963989258 16.99918937683105 C 12.16798973083496 16.99918937683105 12.12759971618652 16.99918937683105 12.08798980712891 16.99995994567871 L 12.06624031066895 16.99995994567871 L 12.06624031066895 33.99914932250977 L -3.552713678800501e-15 33.99914932250977 L -3.552713678800501e-15 0 L 63 0 L 63 33.99914932250977 L 63 34 Z" stroke="none" fill="#707070"/>
            </g>
            <g id="Side_Room_2" transform="translate(112 351)" fill="none">
              <path d="M138,63H41.222a26.357,26.357,0,0,0-2.048-10.083A26,26,0,0,0,33.7,44.687a25.387,25.387,0,0,0-8.088-5.545,24.878,24.878,0,0,0-9.893-2.033h-.211V63H0V0H138V63Z" stroke="none"/>
              <path d="M 137 61.99999237060547 L 137 1 L 1 1 L 1 61.9991455078125 L 14.5072546005249 61.9991455078125 L 14.5072546005249 37.11009216308594 L 14.5072546005249 36.13392639160156 L 15.48312759399414 36.11038208007813 L 15.51552772521973 36.10960006713867 L 15.52760028839111 36.10931015014648 L 15.53965473175049 36.10931015014648 L 15.71863651275635 36.10931015014648 C 19.28630828857422 36.10931015014648 22.74774551391602 36.82059860229492 26.00669097900391 38.22336196899414 C 29.15347290039063 39.5773811340332 31.98159980773926 41.51598358154297 34.41234588623047 43.98516464233398 C 36.84107208251953 46.45147323608398 38.75338363647461 49.32616424560547 40.09616470336914 52.5294189453125 C 41.35797882080078 55.53994750976563 42.06378555297852 58.7209587097168 42.19865417480469 61.99915313720703 L 137 61.99999237060547 M 138 63 L 137.9991455078125 63 L 41.22203826904297 62.9991455078125 C 41.20119857788086 59.50161743164063 40.51240158081055 56.10945510864258 39.17388916015625 52.91598129272461 C 37.88054656982422 49.83065414428711 36.03879928588867 47.06198120117188 33.69983673095703 44.68681716918945 C 31.36016273498535 42.31016540527344 28.63881874084473 40.444580078125 25.61143684387207 39.14192581176758 C 22.47798156738281 37.79318237304688 19.14954566955566 37.10931015014648 15.71863651275635 37.10931015014648 L 15.53965473175049 37.10931015014648 L 15.5072546005249 37.11009216308594 L 15.5072546005249 62.9991455078125 L 0 62.9991455078125 L 0 0 L 138 0 L 138 62.9991455078125 L 138 63 Z" stroke="none" fill="#707070"/>
            </g>
            <g id="Side_Room_3" transform="translate(249 351)" fill="none">
              <path d="M171,63H39.331a26.414,26.414,0,0,0-2.042-10.083,26,26,0,0,0-5.46-8.229,25.328,25.328,0,0,0-8.069-5.545,24.761,24.761,0,0,0-9.867-2.033h-.211V63H0V0H171V63Z" stroke="none"/>
              <path d="M 170 61.99999237060547 L 170 1 L 1 1 L 1 61.99913024902344 L 12.68095684051514 61.99913024902344 L 12.68095684051514 37.11008834838867 L 12.68095684051514 36.13399887084961 L 13.65676116943359 36.11037063598633 L 13.6890869140625 36.10958862304688 L 13.70117378234863 36.10930252075195 L 13.71328258514404 36.10930252075195 L 13.89180469512939 36.10930252075195 C 17.45071792602539 36.10930252075195 20.90384864807129 36.82071685791016 24.15510940551758 38.22369384765625 C 27.29339218139648 39.57711029052734 30.1149787902832 41.51584625244141 32.54147720336914 43.98606491088867 C 34.96408843994141 46.4522819519043 36.87160873413086 49.32693481445313 38.21108627319336 52.5302619934082 C 39.4692268371582 55.53955078125 40.17294692993164 58.72037887573242 40.30740737915039 61.99913787841797 L 170 61.99999237060547 M 171 63 L 170.9991302490234 63 L 39.33071899414063 62.99913024902344 C 39.30995559692383 59.50045776367188 38.62313079833984 56.10830307006836 37.28847885131836 52.91597747802734 C 35.99832534790039 49.83063125610352 34.16119384765625 47.06193542480469 31.82808685302734 44.68682479858398 C 29.49273872375488 42.30941390991211 26.77795600891113 40.44384765625 23.75910949707031 39.14193344116211 C 20.63347816467285 37.79317474365234 17.31365203857422 37.10930252075195 13.89180469512939 37.10930252075195 L 13.71328258514404 37.10930252075195 L 13.68095684051514 37.11008834838867 L 13.68095684051514 62.99913024902344 L 1.4210854715202e-14 62.99913024902344 L 1.4210854715202e-14 3.552713678800501e-15 L 171 3.552713678800501e-15 L 171 62.99913024902344 L 171 63 Z" stroke="none" fill="#707070"/>
            </g>
            <g id="Entire_Outline" transform="translate(52 71)" fill="none">
              <path d="M0,642V0H392.626V112.436H900V642Z" stroke="none"/>
              <path d="M 899 641 L 899 113.4362258911133 L 392.6255493164063 113.4362258911133 L 391.6255493164063 113.4362258911133 L 391.6255493164063 112.4362258911133 L 391.6255493164063 1 L 1 1 L 1 641 L 899 641 M 900 642 L 0 642 L 0 0 L 392.6255493164063 0 L 392.6255493164063 112.4362258911133 L 900 112.4362258911133 L 900 642 Z" stroke="none" fill="#707070"/>
            </g>
            <g id="Walls" transform="translate(554.069 183.333)">
              <line y2="157.781" fill="none" stroke="#707070" stroke-width="1"/>
              <line x1="13.72" transform="translate(0 157.781)" fill="none" stroke="#707070" stroke-width="1"/>
              <line x2="13.72" transform="translate(106.331 214.376) rotate(90)" fill="none" stroke="#707070" stroke-width="1"/>
              <path d="M291.123,0H0" transform="translate(106.331 228.096)" fill="none" stroke="#707070" stroke-width="1"/>
            </g>
          </g>
        </svg>
      );
    }
  }

  export default FloorPlanView