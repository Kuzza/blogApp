# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-16 08:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogApp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='parent',
            new_name='related_to',
        ),
        migrations.AlterField(
            model_name='post',
            name='user',
            field=models.EmailField(max_length=254),
        ),
    ]