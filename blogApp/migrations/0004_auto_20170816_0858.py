# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-16 08:58
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogApp', '0003_auto_20170816_0857'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='user',
            new_name='user_email',
        ),
        migrations.RemoveField(
            model_name='post',
            name='related_to',
        ),
    ]