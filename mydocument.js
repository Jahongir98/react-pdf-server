import React, {useState} from 'react';
import {Document, Font, Image, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import {useQrEncode} from 'react-qr-hooks';



const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        textAlign: 'center',
        color: '#000055',
        fontWeight: "bold",
        left: 0,
    }
});

const MyDocument = ({data}) => {

    const [date, setDate] = useState(new Date().getTime().toString())
    // const encoded = useQrEncode(date);
    console.log(data)
    const {
        year = 'csdcsdc', day = 'csdcsdc',
        month = 'csdcsdc', orderNumber = 'csdcsdc',
        author = 'csdcsdc', speciality = 'csdcsdc',
        lorem1 = 'csdcsdc', lorem2 = 'csdcsdc',
        lorem3 = 'csdcsdc', lorem4 = 'csdcsdc',
        lorem5 = 'csdcsdc', lorem6 = 'csdcsdc',
        listNumber = 'dscd'
    } = data || {}

    return <Document>
        <Page size="A4">
            <Image
                fixed={true}
                src={'./page1.jpg'}
                style={{width: '100%', height: '100%', position: 'absolute', top: 0}}
            />

        </Page>
        <Page size="A4">
            <Image
                fixed={true}
                src={'./page2.jpg'}
                style={{width: '100%', height: '100%', position: 'absolute', top: 0}}
            />
            <View>
                <Text style={{...styles.text, top: 168, left: 390, width: 24}}>{year}</Text>
                <Text style={{...styles.text, top: 183, left: 123, width: 24}}>{day}</Text>
                <Text style={{...styles.text, top: 183, left: 150, width: 80}}>{month}</Text>
                <Text style={{...styles.text, top: 183, left: 273, width: 34}}>{orderNumber}</Text>
                <Text style={{...styles.text, top: 225, left: 103, width: 385}}>{author}</Text>
                <Text style={{...styles.text, top: 256, left: 103, width: 385}}>{speciality}</Text>
                <Text style={{...styles.text, top: 287, left: 103, width: 385}}>{lorem1}</Text>
                <Text style={{...styles.text, top: 318, left: 103, width: 385}}>{lorem2}</Text>
                <Text style={{...styles.text, top: 349, left: 103, width: 342}}>{lorem3}</Text>
                <Text style={{...styles.text, top: 405, left: 103, width: 385}}>{lorem4}</Text>
                <Text style={{...styles.text, top: 450, left: 103, width: 385}}>{lorem5}</Text>
                <Text style={{...styles.text, top: 485, left: 103, width: 385}}>{lorem6}</Text>
                <Text style={{...styles.text, top: 693, left: 262, width: 96}}>{listNumber}</Text>
            </View>
            <View
                style={{
                    // backgroundColor: '#00ff00',
                    position: 'absolute',
                    overflow: 'hidden',
                    width: 77,
                    height: 77,
                    left: 397,
                    top: 634
                }}
            >
               {/* <Image
                    style={{
                        position: 'absolute',
                        width: 86,
                        height: 86,
                        left: -5,
                        top: -5
                    }}
                    src={encoded}
                />*/}
            </View>
        </Page>
    </Document>

}

export default MyDocument
