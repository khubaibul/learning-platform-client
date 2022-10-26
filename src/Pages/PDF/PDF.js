import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
    },
    section: {
        fontSize: 40,
        textAlign: "center",
        marginBottom: 30,
        color: "#c44569",
        fontWeight: "extrabold"
    },
    image: {
        borderRadius: 10,
    },
    description: {
        marginTop: 20,
        color: "#303952",
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20
    },
    common_uses: {
        marginTop: 20,
        color: "#303952"
    },
    info: {


    }
});


const PDF = ({ courseDetail }) => {
    const { common_uses, courseImage, courseTitle, courseId, course_description, course_duration, course_module, course_price, course_module_topics } = courseDetail;
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>{courseTitle}</Text>
                </View>
                <Image
                    style={styles.image}
                    src={courseImage}
                />
                <Text style={styles.description}>
                    Description: {course_description}
                </Text>
                <Text  style={styles.description}>
                    Common Uses: {courseDetail.common_uses}
                </Text>
                <Text  style={styles.description}>
                    Course ID:{courseId}
                </Text>
                <Text style={styles.description}>
                    Course Duration: {course_duration}
                </Text>
                <Text style={styles.description}>
                    Total Module: {course_module}
                </Text>
                <Text style={styles.description}>
                    Price: BDT{course_price}
                </Text>
            </Page>
        </Document>
    );
};

export default PDF;