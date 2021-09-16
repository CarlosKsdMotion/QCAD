#ifndef KSDPANEL_H
#define KSDPANEL_H

#include <QDialog>

QT_BEGIN_NAMESPACE
namespace Ui { class KSDpanel; }
QT_END_NAMESPACE

class KSDpanel : public QDialog
{
    Q_OBJECT

public:
    KSDpanel(QWidget *parent = nullptr);
    ~KSDpanel();

private slots:
    void on_pushButton_clicked();

    void on_modeloPanelA0_clicked();

    void on_modeloPanelA1_clicked();

private:
    Ui::KSDpanel *ui;
};
#endif // KSDPANEL_H
