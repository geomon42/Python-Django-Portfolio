# Generated by Django 3.0.6 on 2020-05-20 03:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0009_auto_20200520_0258'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='id',
            field=models.UUIDField(editable=False, primary_key=True, serialize=False),
        ),
    ]
