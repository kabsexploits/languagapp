# Generated by Django 3.2.15 on 2022-09-28 03:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0004_alter_imagesapp_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('Text', models.TextField(max_length=200)),
                ('Meaning', models.TextField(max_length=200)),
            ],
        ),
    ]
