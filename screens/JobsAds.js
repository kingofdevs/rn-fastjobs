import React from 'react';
import Colors from '../constants/Colors';
import Header from '../components/Header';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal, Image, Dimensions, ImageBackground, Picker, TextInput, KeyboardAvoidingView, CheckBox } from 'react-native';
import { i } from '../constants/Style';
import { Entypo } from "@expo/vector-icons";
import { t } from '../constants/Text';
import { pic } from '../constants/Image';
import { withNamespaces } from "react-i18next";

const width = Dimensions.get('window').width;

class JobsAds extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      check: false,
      modalVisible: false,
      editModalVisible: false,
      modalDelVisible: false
    };
  }

  renderIndicator() {
    const {t} = this.props;
    return (
      <Modal
        visible={this.state.modalVisible}
        transparent={true}
        onRequestClose={() => { }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>

            <Text> {t("title:enter_job_ads_type")}</Text>

            <TextInput
              style={styles.input}
              placeholder={'Job Ads Type'}
              onChangeText={(company_name) => this.setState({ company_name })}
              value={this.state.company_name}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 12, }}>

              <TouchableOpacity style={styles.modalBtn} onPress={() => this.setState({ modalVisible: false })}>
                <Text style={{ color: Colors.WHITE }}> {t("button:cancel")} </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalBtn}>
                <Text style={{ color: Colors.WHITE }}> {t("button:ok")} </Text>
              </TouchableOpacity>

            </View>

          </View>
        </View>
      </Modal>
    );
  }

  renderEditModal() {
    const{t}= this.props
    return (
      <Modal
        visible={this.state.editModalVisible}
        transparent={true}
        onRequestClose={() => { }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>

            <Text >{t("title:edit_job_ads_type")}</Text>

            <TextInput
              style={styles.input}
              placeholder={t("placeholder:job_ads_type")}
              onChangeText={(company_name) => this.setState({ company_name })}
              value={this.state.company_name}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 12, }}>

              <TouchableOpacity onPress={()=>this.setState({modalDelVisible:true})} style={styles.modalBtn}>
                <Text style={{ color: Colors.WHITE }}> {t("button:delete")} </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalBtn} onPress={() => this.setState({ editModalVisible: false })}>
                <Text style={{ color: Colors.WHITE }}> {t("button:cancel")} </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalBtn}>
                <Text style={{ color: Colors.WHITE }}> {t("button:ok")} </Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>
    );
  }

  renderDelModal() {
    const { t } = this.props
    return (
      <Modal
        visible={this.state.modalDelVisible}
        transparent={true}
        onRequestClose={() => { }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>

            <Text > {t("title:delete_message")}? </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 12, }}>

              <TouchableOpacity style={styles.modalBtn} onPress={() => this.setState({ modalDelVisible: false })}>
                <Text style={{ color: Colors.WHITE }}> {t("button:no")} </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalBtn}>
                <Text style={{ color: Colors.WHITE }}> {t("button:yes")} </Text>
              </TouchableOpacity>

            </View>

          </View>
        </View>
      </Modal>
    );
  }

  render() {
    const {t} = this.props
    return (
      <KeyboardAvoidingView style={i.container} behavior={"padding"} >

        <Header title={t("header:job_ads_setting")} />

        <ScrollView style={{ margin: 12, }} >

          <TouchableOpacity
            onPress={() => this.setState({ modalVisible: true, company_name: "" })}
            style={{ flexDirection: 'row', alignItems: 'center', height: 50, flex: 1, marginTop: 2, borderBottomColor: Colors.GREY2, borderBottomWidth: 1, }}>
            <Image source={pic.plus_2} style={{ width: 34, height: 34 }} />
            <Text style={{ fontSize: 17, marginLeft: 12, color: Colors.GREY1 }}> {t("title:create_job_ads_type")} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row} onPress={() => this.setState({ editModalVisible: true, company_name: "Event" })} >
            <Text style={{ fontSize: 17 }}>Event</Text>
            <Entypo name="chevron-small-right" size={32} color={Colors.GREY2} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.row} onPress={() => this.setState({ editModalVisible: true, company_name: "Housekeeping" })} >
            <Text style={{ fontSize: 17 }}>Housekeeping</Text>
            <Entypo name="chevron-small-right" size={32} color={Colors.GREY2} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.row} onPress={() => this.setState({ editModalVisible: true, company_name: "Banquet" })} >
            <Text style={{ fontSize: 17 }}>Banquet</Text>
            <Entypo name="chevron-small-right" size={32} color={Colors.GREY2} />
          </TouchableOpacity>

          {this.renderIndicator()}
          {this.renderEditModal()}
          {this.renderDelModal()}

        </ScrollView>

      </KeyboardAvoidingView>
    );
  }
}

export default withNamespaces(["common"], { wait: true })( JobsAds );


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.BACKGROUND,
    height: 54,
    padding: 3,
    paddingHorizontal: 8,
    borderColor: Colors.PINK,
    borderBottomWidth: 4
  },
  row: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.GREY2,
    borderBottomWidth: 1,
    fontSize: 16,
    paddingLeft: 6,
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0,0.5)",
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    width: width - 40,
    height: width / 2.2,
    borderRadius: 5,
    shadowColor: "black",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    backgroundColor: "white"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 16,
    paddingLeft: 12,
    marginVertical: 10,
    borderRadius: 5,
    margin: 20,
    marginTop: 25,
    width: '90%'
  },
  modalBtn: {
    padding: 5, 
    marginHorizontal: 6, 
    backgroundColor: Colors.BLUE, 
    width: 70, 
    borderRadius: 5, 
    alignItems: 'center',
  }
});
