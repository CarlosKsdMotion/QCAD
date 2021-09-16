#include "KSDpanel.h"
#include "ui_KSDpanel.h"

KSDpanel::KSDpanel(QWidget *parent)
    : QDialog(parent)
    , ui(new Ui::KSDpanel)
{
    ui->setupUi(this);
}

KSDpanel::~KSDpanel()
{
    delete ui;
}


void KSDpanel::on_pushButton_clicked()
{
    QString texto;
    texto="Esto es una prueba";
    ui->textoSalida->setText(texto);

    ui->pushButton->setVisible(false);
}







//CADA VEZ QUE SE PINCHE UN BOTON SE CAMBIA LA IMAGEN
void KSDpanel::on_modeloPanelA0_clicked()
{
    QPixmap pixmap("C:/Program Files/QCADCAM/scripts/Misc/Examples/DrawExamples/KSDpanel/imagenes/REF_AH5.jpg");
    ui->imagenPanelUI->setPixmap(pixmap);
    ui->imagenPanelUI->setMask(pixmap.mask());
    ui->imagenPanelUI->show();
}

void KSDpanel::on_modeloPanelA1_clicked()
{
    QPixmap pixmap("C:/Program Files/QCADCAM/scripts/Misc/Examples/DrawExamples/KSDpanel/imagenes/REF_CH8.jpg");
    ui->imagenPanelUI->setPixmap(pixmap);
    ui->imagenPanelUI->setMask(pixmap.mask());
    ui->imagenPanelUI->show();
}

