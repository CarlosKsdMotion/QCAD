/********************************************************************************
** Form generated from reading UI file 'KSDpanel.ui'
**
** Created by: Qt User Interface Compiler version 6.1.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_KSDPANEL_H
#define UI_KSDPANEL_H

#include <QtCore/QVariant>
#include <QtWidgets/QAbstractButton>
#include <QtWidgets/QApplication>
#include <QtWidgets/QComboBox>
#include <QtWidgets/QDialog>
#include <QtWidgets/QDialogButtonBox>
#include <QtWidgets/QFrame>
#include <QtWidgets/QGroupBox>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QRadioButton>
#include <QtWidgets/QTextEdit>

QT_BEGIN_NAMESPACE

class Ui_KSDpanel
{
public:
    QTextEdit *textEdit;
    QFrame *line;
    QLabel *label;
    QComboBox *modeloPanelUI;
    QPushButton *anadirFavoritos;
    QPushButton *eliminarFavoritos;
    QGroupBox *groupBox;
    QGroupBox *groupBox_2;
    QLabel *imagenPanelUI;
    QRadioButton *modeloPanelA0;
    QRadioButton *modeloPanelA1;
    QRadioButton *modeloPanelA2;
    QRadioButton *modeloPanelA3;
    QRadioButton *modeloPanelA4;
    QRadioButton *modeloPanelA5;
    QRadioButton *modeloPanelA6;
    QRadioButton *modeloPanelA7;
    QRadioButton *modeloPanelA8;
    QRadioButton *modeloPanelB0;
    QRadioButton *modeloPanelB1;
    QRadioButton *modeloPanelB2;
    QRadioButton *modeloPanelB3;
    QRadioButton *modeloPanelB4;
    QRadioButton *modeloPanelB5;
    QRadioButton *modeloPanelB6;
    QRadioButton *modeloPanelB7;
    QRadioButton *modeloPanelB8;
    QRadioButton *modeloPanelB9;
    QRadioButton *modeloPanelB10;
    QRadioButton *modeloPanelB11;
    QRadioButton *modeloPanelB12;
    QRadioButton *modeloPanelB13;
    QRadioButton *modeloPanelB14;
    QRadioButton *modeloPanelB15;
    QRadioButton *modeloPanelB16;
    QRadioButton *modeloPanelB17;
    QRadioButton *modeloPanelC0;
    QRadioButton *modeloPanelC1;
    QRadioButton *modeloPanelC2;
    QRadioButton *modeloPanelC_4;
    QRadioButton *modeloPanelC4;
    QRadioButton *modeloPanelC5;
    QRadioButton *modeloPanelC6;
    QRadioButton *modeloPanelC7;
    QRadioButton *modeloPanelC8;
    QFrame *line_2;
    QFrame *line_3;
    QDialogButtonBox *buttonBox;
    QPushButton *pushButton;
    QLineEdit *textoSalida;

    void setupUi(QDialog *KSDpanel)
    {
        if (KSDpanel->objectName().isEmpty())
            KSDpanel->setObjectName(QString::fromUtf8("KSDpanel"));
        KSDpanel->resize(850, 755);
        textEdit = new QTextEdit(KSDpanel);
        textEdit->setObjectName(QString::fromUtf8("textEdit"));
        textEdit->setGeometry(QRect(9, 9, 831, 71));
        textEdit->setReadOnly(true);
        line = new QFrame(KSDpanel);
        line->setObjectName(QString::fromUtf8("line"));
        line->setGeometry(QRect(260, 90, 16, 541));
        line->setFrameShape(QFrame::VLine);
        line->setFrameShadow(QFrame::Sunken);
        label = new QLabel(KSDpanel);
        label->setObjectName(QString::fromUtf8("label"));
        label->setGeometry(QRect(20, 100, 101, 16));
        modeloPanelUI = new QComboBox(KSDpanel);
        modeloPanelUI->addItem(QString());
        modeloPanelUI->addItem(QString());
        modeloPanelUI->addItem(QString());
        modeloPanelUI->addItem(QString());
        modeloPanelUI->addItem(QString());
        modeloPanelUI->addItem(QString());
        modeloPanelUI->addItem(QString());
        modeloPanelUI->addItem(QString());
        modeloPanelUI->setObjectName(QString::fromUtf8("modeloPanelUI"));
        modeloPanelUI->setGeometry(QRect(120, 100, 111, 22));
        anadirFavoritos = new QPushButton(KSDpanel);
        anadirFavoritos->setObjectName(QString::fromUtf8("anadirFavoritos"));
        anadirFavoritos->setGeometry(QRect(10, 140, 111, 23));
        anadirFavoritos->setStyleSheet(QString::fromUtf8("background-color: rgb(0, 209, 0);"));
        eliminarFavoritos = new QPushButton(KSDpanel);
        eliminarFavoritos->setObjectName(QString::fromUtf8("eliminarFavoritos"));
        eliminarFavoritos->setGeometry(QRect(140, 140, 111, 23));
        eliminarFavoritos->setStyleSheet(QString::fromUtf8("background-color: rgb(234, 0, 0);"));
        groupBox = new QGroupBox(KSDpanel);
        groupBox->setObjectName(QString::fromUtf8("groupBox"));
        groupBox->setGeometry(QRect(10, 180, 241, 211));
        groupBox_2 = new QGroupBox(KSDpanel);
        groupBox_2->setObjectName(QString::fromUtf8("groupBox_2"));
        groupBox_2->setGeometry(QRect(10, 410, 241, 211));
        imagenPanelUI = new QLabel(KSDpanel);
        imagenPanelUI->setObjectName(QString::fromUtf8("imagenPanelUI"));
        imagenPanelUI->setGeometry(QRect(280, 90, 551, 271));
        imagenPanelUI->setPixmap(QPixmap(QString::fromUtf8("../imagenes/REF_AH.jpg")));
        imagenPanelUI->setScaledContents(true);
        modeloPanelA0 = new QRadioButton(KSDpanel);
        modeloPanelA0->setObjectName(QString::fromUtf8("modeloPanelA0"));
        modeloPanelA0->setGeometry(QRect(328, 380, 65, 17));
        modeloPanelA0->setChecked(true);
        modeloPanelA1 = new QRadioButton(KSDpanel);
        modeloPanelA1->setObjectName(QString::fromUtf8("modeloPanelA1"));
        modeloPanelA1->setGeometry(QRect(399, 380, 65, 17));
        modeloPanelA2 = new QRadioButton(KSDpanel);
        modeloPanelA2->setObjectName(QString::fromUtf8("modeloPanelA2"));
        modeloPanelA2->setGeometry(QRect(470, 380, 65, 17));
        modeloPanelA3 = new QRadioButton(KSDpanel);
        modeloPanelA3->setObjectName(QString::fromUtf8("modeloPanelA3"));
        modeloPanelA3->setGeometry(QRect(328, 403, 65, 17));
        modeloPanelA4 = new QRadioButton(KSDpanel);
        modeloPanelA4->setObjectName(QString::fromUtf8("modeloPanelA4"));
        modeloPanelA4->setGeometry(QRect(399, 403, 65, 17));
        modeloPanelA5 = new QRadioButton(KSDpanel);
        modeloPanelA5->setObjectName(QString::fromUtf8("modeloPanelA5"));
        modeloPanelA5->setGeometry(QRect(470, 403, 65, 17));
        modeloPanelA6 = new QRadioButton(KSDpanel);
        modeloPanelA6->setObjectName(QString::fromUtf8("modeloPanelA6"));
        modeloPanelA6->setGeometry(QRect(328, 426, 65, 17));
        modeloPanelA7 = new QRadioButton(KSDpanel);
        modeloPanelA7->setObjectName(QString::fromUtf8("modeloPanelA7"));
        modeloPanelA7->setGeometry(QRect(399, 426, 65, 17));
        modeloPanelA8 = new QRadioButton(KSDpanel);
        modeloPanelA8->setObjectName(QString::fromUtf8("modeloPanelA8"));
        modeloPanelA8->setGeometry(QRect(470, 426, 65, 17));
        modeloPanelB0 = new QRadioButton(KSDpanel);
        modeloPanelB0->setObjectName(QString::fromUtf8("modeloPanelB0"));
        modeloPanelB0->setGeometry(QRect(564, 385, 64, 17));
        modeloPanelB1 = new QRadioButton(KSDpanel);
        modeloPanelB1->setObjectName(QString::fromUtf8("modeloPanelB1"));
        modeloPanelB1->setGeometry(QRect(640, 385, 64, 17));
        modeloPanelB2 = new QRadioButton(KSDpanel);
        modeloPanelB2->setObjectName(QString::fromUtf8("modeloPanelB2"));
        modeloPanelB2->setGeometry(QRect(716, 385, 64, 17));
        modeloPanelB3 = new QRadioButton(KSDpanel);
        modeloPanelB3->setObjectName(QString::fromUtf8("modeloPanelB3"));
        modeloPanelB3->setGeometry(QRect(564, 408, 64, 17));
        modeloPanelB4 = new QRadioButton(KSDpanel);
        modeloPanelB4->setObjectName(QString::fromUtf8("modeloPanelB4"));
        modeloPanelB4->setGeometry(QRect(640, 408, 64, 17));
        modeloPanelB5 = new QRadioButton(KSDpanel);
        modeloPanelB5->setObjectName(QString::fromUtf8("modeloPanelB5"));
        modeloPanelB5->setGeometry(QRect(716, 408, 64, 17));
        modeloPanelB6 = new QRadioButton(KSDpanel);
        modeloPanelB6->setObjectName(QString::fromUtf8("modeloPanelB6"));
        modeloPanelB6->setGeometry(QRect(564, 431, 64, 17));
        modeloPanelB7 = new QRadioButton(KSDpanel);
        modeloPanelB7->setObjectName(QString::fromUtf8("modeloPanelB7"));
        modeloPanelB7->setGeometry(QRect(640, 431, 64, 17));
        modeloPanelB8 = new QRadioButton(KSDpanel);
        modeloPanelB8->setObjectName(QString::fromUtf8("modeloPanelB8"));
        modeloPanelB8->setGeometry(QRect(716, 431, 64, 17));
        modeloPanelB9 = new QRadioButton(KSDpanel);
        modeloPanelB9->setObjectName(QString::fromUtf8("modeloPanelB9"));
        modeloPanelB9->setGeometry(QRect(564, 454, 64, 17));
        modeloPanelB10 = new QRadioButton(KSDpanel);
        modeloPanelB10->setObjectName(QString::fromUtf8("modeloPanelB10"));
        modeloPanelB10->setGeometry(QRect(640, 454, 70, 17));
        modeloPanelB11 = new QRadioButton(KSDpanel);
        modeloPanelB11->setObjectName(QString::fromUtf8("modeloPanelB11"));
        modeloPanelB11->setGeometry(QRect(716, 454, 70, 17));
        modeloPanelB12 = new QRadioButton(KSDpanel);
        modeloPanelB12->setObjectName(QString::fromUtf8("modeloPanelB12"));
        modeloPanelB12->setGeometry(QRect(564, 477, 70, 17));
        modeloPanelB13 = new QRadioButton(KSDpanel);
        modeloPanelB13->setObjectName(QString::fromUtf8("modeloPanelB13"));
        modeloPanelB13->setGeometry(QRect(640, 477, 70, 17));
        modeloPanelB14 = new QRadioButton(KSDpanel);
        modeloPanelB14->setObjectName(QString::fromUtf8("modeloPanelB14"));
        modeloPanelB14->setGeometry(QRect(716, 477, 70, 17));
        modeloPanelB15 = new QRadioButton(KSDpanel);
        modeloPanelB15->setObjectName(QString::fromUtf8("modeloPanelB15"));
        modeloPanelB15->setGeometry(QRect(564, 500, 70, 17));
        modeloPanelB16 = new QRadioButton(KSDpanel);
        modeloPanelB16->setObjectName(QString::fromUtf8("modeloPanelB16"));
        modeloPanelB16->setGeometry(QRect(640, 500, 70, 17));
        modeloPanelB17 = new QRadioButton(KSDpanel);
        modeloPanelB17->setObjectName(QString::fromUtf8("modeloPanelB17"));
        modeloPanelB17->setGeometry(QRect(716, 500, 70, 17));
        modeloPanelC0 = new QRadioButton(KSDpanel);
        modeloPanelC0->setObjectName(QString::fromUtf8("modeloPanelC0"));
        modeloPanelC0->setGeometry(QRect(330, 457, 65, 17));
        modeloPanelC1 = new QRadioButton(KSDpanel);
        modeloPanelC1->setObjectName(QString::fromUtf8("modeloPanelC1"));
        modeloPanelC1->setGeometry(QRect(401, 457, 65, 17));
        modeloPanelC2 = new QRadioButton(KSDpanel);
        modeloPanelC2->setObjectName(QString::fromUtf8("modeloPanelC2"));
        modeloPanelC2->setGeometry(QRect(472, 457, 65, 17));
        modeloPanelC_4 = new QRadioButton(KSDpanel);
        modeloPanelC_4->setObjectName(QString::fromUtf8("modeloPanelC_4"));
        modeloPanelC_4->setGeometry(QRect(330, 480, 65, 17));
        modeloPanelC4 = new QRadioButton(KSDpanel);
        modeloPanelC4->setObjectName(QString::fromUtf8("modeloPanelC4"));
        modeloPanelC4->setGeometry(QRect(401, 480, 65, 17));
        modeloPanelC5 = new QRadioButton(KSDpanel);
        modeloPanelC5->setObjectName(QString::fromUtf8("modeloPanelC5"));
        modeloPanelC5->setGeometry(QRect(472, 480, 65, 17));
        modeloPanelC6 = new QRadioButton(KSDpanel);
        modeloPanelC6->setObjectName(QString::fromUtf8("modeloPanelC6"));
        modeloPanelC6->setGeometry(QRect(330, 503, 65, 17));
        modeloPanelC7 = new QRadioButton(KSDpanel);
        modeloPanelC7->setObjectName(QString::fromUtf8("modeloPanelC7"));
        modeloPanelC7->setGeometry(QRect(401, 503, 65, 17));
        modeloPanelC8 = new QRadioButton(KSDpanel);
        modeloPanelC8->setObjectName(QString::fromUtf8("modeloPanelC8"));
        modeloPanelC8->setGeometry(QRect(472, 503, 65, 17));
        line_2 = new QFrame(KSDpanel);
        line_2->setObjectName(QString::fromUtf8("line_2"));
        line_2->setGeometry(QRect(540, 380, 16, 151));
        line_2->setFrameShape(QFrame::VLine);
        line_2->setFrameShadow(QFrame::Sunken);
        line_3 = new QFrame(KSDpanel);
        line_3->setObjectName(QString::fromUtf8("line_3"));
        line_3->setGeometry(QRect(330, 440, 211, 16));
        line_3->setFrameShape(QFrame::HLine);
        line_3->setFrameShadow(QFrame::Sunken);
        buttonBox = new QDialogButtonBox(KSDpanel);
        buttonBox->setObjectName(QString::fromUtf8("buttonBox"));
        buttonBox->setGeometry(QRect(440, 540, 156, 23));
        buttonBox->setOrientation(Qt::Horizontal);
        buttonBox->setStandardButtons(QDialogButtonBox::Cancel|QDialogButtonBox::Ok);
        pushButton = new QPushButton(KSDpanel);
        pushButton->setObjectName(QString::fromUtf8("pushButton"));
        pushButton->setGeometry(QRect(380, 690, 75, 23));
        textoSalida = new QLineEdit(KSDpanel);
        textoSalida->setObjectName(QString::fromUtf8("textoSalida"));
        textoSalida->setGeometry(QRect(480, 690, 113, 20));
        textoSalida->setReadOnly(true);

        retranslateUi(KSDpanel);

        QMetaObject::connectSlotsByName(KSDpanel);
    } // setupUi

    void retranslateUi(QDialog *KSDpanel)
    {
        KSDpanel->setWindowTitle(QCoreApplication::translate("KSDpanel", "Enter Position", nullptr));
        textEdit->setHtml(QCoreApplication::translate("KSDpanel", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"</style></head><body style=\" font-family:'MS Shell Dlg 2'; font-size:8.25pt; font-weight:400; font-style:normal;\">\n"
"<p align=\"center\" style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:36pt; font-weight:600;\">KSDpanel _ v2</span></p></body></html>", nullptr));
        label->setText(QCoreApplication::translate("KSDpanel", "Seleccionar familia:", nullptr));
        modeloPanelUI->setItemText(0, QCoreApplication::translate("KSDpanel", "Familia STB", nullptr));
        modeloPanelUI->setItemText(1, QCoreApplication::translate("KSDpanel", "Familia A", nullptr));
        modeloPanelUI->setItemText(2, QCoreApplication::translate("KSDpanel", "Familia B", nullptr));
        modeloPanelUI->setItemText(3, QCoreApplication::translate("KSDpanel", "Familia C", nullptr));
        modeloPanelUI->setItemText(4, QCoreApplication::translate("KSDpanel", "Familia D", nullptr));
        modeloPanelUI->setItemText(5, QCoreApplication::translate("KSDpanel", "Familia E", nullptr));
        modeloPanelUI->setItemText(6, QCoreApplication::translate("KSDpanel", "Familia F", nullptr));
        modeloPanelUI->setItemText(7, QCoreApplication::translate("KSDpanel", "Familia G", nullptr));

        anadirFavoritos->setText(QCoreApplication::translate("KSDpanel", "A\303\261adir a favoritos", nullptr));
        eliminarFavoritos->setText(QCoreApplication::translate("KSDpanel", "Eliminar de favoritos", nullptr));
        groupBox->setTitle(QCoreApplication::translate("KSDpanel", "Favoritos", nullptr));
        groupBox_2->setTitle(QCoreApplication::translate("KSDpanel", "Paneles familia seleccionada", nullptr));
        imagenPanelUI->setText(QString());
        modeloPanelA0->setText(QCoreApplication::translate("KSDpanel", "Panel A0", nullptr));
        modeloPanelA1->setText(QCoreApplication::translate("KSDpanel", "Panel A1", nullptr));
        modeloPanelA2->setText(QCoreApplication::translate("KSDpanel", "Panel A2", nullptr));
        modeloPanelA3->setText(QCoreApplication::translate("KSDpanel", "Panel A3", nullptr));
        modeloPanelA4->setText(QCoreApplication::translate("KSDpanel", "Panel A4", nullptr));
        modeloPanelA5->setText(QCoreApplication::translate("KSDpanel", "Panel A5", nullptr));
        modeloPanelA6->setText(QCoreApplication::translate("KSDpanel", "Panel A6", nullptr));
        modeloPanelA7->setText(QCoreApplication::translate("KSDpanel", "Panel A7", nullptr));
        modeloPanelA8->setText(QCoreApplication::translate("KSDpanel", "Panel A8", nullptr));
        modeloPanelB0->setText(QCoreApplication::translate("KSDpanel", "Panel B0", nullptr));
        modeloPanelB1->setText(QCoreApplication::translate("KSDpanel", "Panel B1", nullptr));
        modeloPanelB2->setText(QCoreApplication::translate("KSDpanel", "Panel B2", nullptr));
        modeloPanelB3->setText(QCoreApplication::translate("KSDpanel", "Panel B3", nullptr));
        modeloPanelB4->setText(QCoreApplication::translate("KSDpanel", "Panel B4", nullptr));
        modeloPanelB5->setText(QCoreApplication::translate("KSDpanel", "Panel B5", nullptr));
        modeloPanelB6->setText(QCoreApplication::translate("KSDpanel", "Panel B6", nullptr));
        modeloPanelB7->setText(QCoreApplication::translate("KSDpanel", "Panel B7", nullptr));
        modeloPanelB8->setText(QCoreApplication::translate("KSDpanel", "Panel B8", nullptr));
        modeloPanelB9->setText(QCoreApplication::translate("KSDpanel", "Panel B9", nullptr));
        modeloPanelB10->setText(QCoreApplication::translate("KSDpanel", "Panel B10", nullptr));
        modeloPanelB11->setText(QCoreApplication::translate("KSDpanel", "Panel B11", nullptr));
        modeloPanelB12->setText(QCoreApplication::translate("KSDpanel", "Panel B12", nullptr));
        modeloPanelB13->setText(QCoreApplication::translate("KSDpanel", "Panel B13", nullptr));
        modeloPanelB14->setText(QCoreApplication::translate("KSDpanel", "Panel B14", nullptr));
        modeloPanelB15->setText(QCoreApplication::translate("KSDpanel", "Panel B15", nullptr));
        modeloPanelB16->setText(QCoreApplication::translate("KSDpanel", "Panel B16", nullptr));
        modeloPanelB17->setText(QCoreApplication::translate("KSDpanel", "Panel B17", nullptr));
        modeloPanelC0->setText(QCoreApplication::translate("KSDpanel", "Panel C0", nullptr));
        modeloPanelC1->setText(QCoreApplication::translate("KSDpanel", "Panel C1", nullptr));
        modeloPanelC2->setText(QCoreApplication::translate("KSDpanel", "Panel C2", nullptr));
        modeloPanelC_4->setText(QCoreApplication::translate("KSDpanel", "Panel C3", nullptr));
        modeloPanelC4->setText(QCoreApplication::translate("KSDpanel", "Panel C4", nullptr));
        modeloPanelC5->setText(QCoreApplication::translate("KSDpanel", "Panel C5", nullptr));
        modeloPanelC6->setText(QCoreApplication::translate("KSDpanel", "Panel C6", nullptr));
        modeloPanelC7->setText(QCoreApplication::translate("KSDpanel", "Panel C7", nullptr));
        modeloPanelC8->setText(QCoreApplication::translate("KSDpanel", "Panel C8", nullptr));
        pushButton->setText(QCoreApplication::translate("KSDpanel", "prueba", nullptr));
    } // retranslateUi

};

namespace Ui {
    class KSDpanel: public Ui_KSDpanel {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_KSDPANEL_H
